import { Spinner } from "@/components/ui/spinner"
import { mapDocs } from "@/lib/utils"
import { getCharacterData, getCharacters } from "@/services/browse.service"
import { CharacterDocsModel } from "@/types/browse.model"
import { useEffect, useState } from "react"
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
import { ChevronsRight } from "lucide-react"
import Button from "@/components/Button"

export default function Characters({ onLoad, reload }: { onLoad?: (status: boolean) => void; reload?: number }) {
	const [characters, setCharacters] = useState<CharacterDocsModel[]>()
	const [charData, setCharData] = useState<CharacterDocsModel | null>()
	const [loading, setLoading] = useState(true)
	const [charLoading, setCharLoading] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)

	//#region Requests
	const fetchList = async () => {
		handleLoading(true)
		const filterMinor = (list: CharacterDocsModel[]) => {
			return list?.filter((x) => x.name !== "MINOR_CHARACTER") || []
		}

		try {
			const data = await getCharacters()
			setCharacters(filterMinor(mapDocs(data)))
		} catch (err) {
			setError((err as Error).message)
		} finally {
			handleLoading(false)
		}
	}

	const fetchCharData = async (id: string) => {
		setCharLoading(id)
		try {
			const data = await getCharacterData(id)
			setCharData(mapDocs(data)?.[0])
		} catch (err) {
			setError((err as Error).message)
		} finally {
			setCharLoading(null)
		}
	}
	//#endregion

	//#region Handlers
	const handleLoading = (value: boolean) => {
		setLoading(value)
		onLoad && onLoad(value)
	}

	const handleCharDataModal = (id: string) => {
		if (charLoading) {
			return
		}
		fetchCharData(id)
	}

	const handleDialogToggle = (isOpen: boolean) => {
		if (!isOpen) {
			setCharData(null)
			setCharLoading(null)
		}
	}
	//#endregion

	//#region Hooks
	useEffect(() => {
		fetchList()
	}, [reload])

	if (!onLoad) {
		if (loading)
			return (
				<p>
					<Spinner className="float-left mr-2 mt-1" />
					Loading
				</p>
			)
		if (error) return <p>{error}</p>
	}
	//#region

	//#region HTML start
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
						{charData && !charLoading && (
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
