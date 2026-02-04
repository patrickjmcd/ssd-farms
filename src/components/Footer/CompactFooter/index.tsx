import type { ReactNode } from "react";

import { FooterCopyright } from "../FooterCopyright";

interface FooterLink {
	label: string;
	href: string;
}

type ICenteredFooterProps = {
	logo?: ReactNode;
	siteTitle: string;
	links?: FooterLink[][];
};

const CenteredFooter = (props: ICenteredFooterProps) => (
	<div className={"flex flex-col"}>
		<div className="flex justify-between">
			<nav className="flex">
				{props.links?.map((linkColumn, colIndex) => (
					<ul
						key={`col-${colIndex}`}
						className="navbar flex flex-row items-center font-medium text-gray-200"
					>
						{linkColumn.map((link) => (
							<li key={link.href} className="mx-2 py-3">
								<a href={link.href} className="hover:text-primary">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				))}
			</nav>
			<div className="text-sm self-center">
				<FooterCopyright title={props.siteTitle} />
			</div>
		</div>
	</div>
);

export default CenteredFooter;
