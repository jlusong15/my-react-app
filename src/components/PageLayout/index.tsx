import { NavLinks } from "@/types/nav.model"
import MenuNav from "../MenuNav"
import React from "react"
import { AppSidebar } from "../Sidebar"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { BreadcrumbBasic, BreadcrumbBasicItemModel } from "../Breadcrumbs"
import DefaultSidebar from "./default-sidebar"

interface PageLayoutProps {
	children: React.ReactNode
	sidebarContent?: React.ReactNode
	pageTitle?: string
	breadcrumbList?: BreadcrumbBasicItemModel[]
	type?: "DEFAULT" | "SIDEBAR"
}

export default function PageLayout({
	children,
	type = "DEFAULT",
	sidebarContent,
	pageTitle,
	breadcrumbList,
}: PageLayoutProps) {
	return (
		<div>
			<MenuNav navigation={NavLinks} />
			{type === "SIDEBAR" ? (
				<SidebarProvider>
					<AppSidebar>{sidebarContent ?? <DefaultSidebar />}</AppSidebar>

					{/* Main content */}
					<main className="w-full p-2.5">
						<div className="bg-white border border-neutral-200 rounded-[10px]">
							{/* Header */}
							<div className="flex items-center p-5 border-b border-b-neutral-200">
								<div className="pr-3.75">
									<SidebarTrigger className="cursor-pointer" />
								</div>
								{pageTitle && (
									<div className="flex w-full px-3.75 border-l border-l-neutral-200 font-bold">
										<span className="font-bold">{pageTitle ?? ""}</span>
									</div>
								)}
							</div>

							{/* Breadcrumbs */}
							{!!breadcrumbList?.length && (
								<div className="p-5">
									<BreadcrumbBasic items={breadcrumbList ?? []} className="text-xs!" />
								</div>
							)}

							{/* Content */}
							<div className="p-5">{children}</div>
						</div>
					</main>
				</SidebarProvider>
			) : (
				<main>{children}</main>
			)}
		</div>
	)
}
