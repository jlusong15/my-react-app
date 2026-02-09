import Button from "@/components/Button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
import { useGetCharactersQuery, useLazyGetCharacterDataQuery } from "@/services/browse.service"
import { ChevronsRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Characters({ onLoad, reload }: { onLoad?: (status: boolean) => void; reload?: number }) {
	const [charLoading, setCharLoading] = useState<string | null>(null)
	const {
		data: characters,
		error: errorList,
		isLoading: isListLoading,
		refetch: refetchList,
		isFetching: isFetchingList,
	} = useGetCharactersQuery()
	const [fetchCharData, { data: charData, reset: resetCharData }] = useLazyGetCharacterDataQuery()
	const refData = useRef(charData)

	const handleCharDataModal = (id: string) => {
		if (charLoading) {
			return
		}
		setCharLoading(id)
		fetchCharData(id)
	}

	const handleDialogToggle = (isOpen: boolean) => {
		if (!isOpen) {
			setCharLoading(null)
			resetCharData()
		}
	}

	useEffect(() => {
		refData.current = charData
	}, [charData])

	useEffect(() => {
		refetchList()
	}, [reload])

	useEffect(() => {
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			if (refData?.current) {
				e.preventDefault()
				e.returnValue = ""
			}
		}

		window.addEventListener("beforeunload", handleBeforeUnload)
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload)
		}
	}, [])

	if (!onLoad) {
		if (isListLoading || isFetchingList)
			return (
				<p>
					<Spinner className="float-left mr-2 mt-1" />
					Loading
				</p>
			)
		if (errorList) return <p>Error</p>
	}

	return (
		<div>
			<ul className="grid grid-cols-3 gap-2 list-disc list-inside">
				{characters?.map((c) => (
					<Dialog onOpenChange={handleDialogToggle} key={c._id}>
						<li className="flex flex-row gap-2 items-center">
							<DialogTrigger
								className="cursor-pointer hover:text-gray-500"
								onClick={() => handleCharDataModal(c._id)}
								disabled={!!charLoading}
							>
								{c.name}
							</DialogTrigger>
							{charLoading === c._id && <Spinner className="text-gray-500" />}
						</li>
						{charData && charLoading === charData?._id && (
							<DialogContent>
								<DialogHeader>
									<DialogTitle className="border-b pb-3">{charData?.name}</DialogTitle>
									<DialogDescription>Get to know the character</DialogDescription>
								</DialogHeader>
								<ul>
									<li>
										<strong>Gender:</strong> {charData?.gender || "Unknown"}
									</li>
									<li>
										<strong>Spouse:</strong> {charData?.spouse || "Unknown"}
									</li>
									<li>
										<strong>Race:</strong> {charData?.race || "Unknown"}
									</li>
									<li>
										<strong>Realm:</strong> {charData?.realm || "Unknown"}
									</li>
									<li>
										<strong>Hair:</strong> {charData?.hair || "Unknown"}
									</li>
									<li>
										<strong>Death:</strong> {charData?.death || "Unknown"}
									</li>
									<li>
										<a
											className="flex flex-row items-center cursor-pointer hover:text-gray-500 mt-3"
											href={charData?.wikiUrl}
											target="_blank"
										>
											Go to Wiki <ChevronsRight className="size-4 ml-1" />
										</a>
									</li>
								</ul>
								<DialogFooter className="sm:justify-star">
									<DialogClose asChild>
										<Button type="button">Close</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						)}
					</Dialog>
				))}
			</ul>
		</div>
	)
	//#endregion
}
