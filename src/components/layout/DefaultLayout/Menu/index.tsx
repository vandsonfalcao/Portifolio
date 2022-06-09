// Modules
import { useState } from "react";

// Style
import { MenuBar, MenuModal } from "./style";

// Components
import MenuButton from "./MenuButton";
import Link from "next/link";

export function Menu() {
	const [isOpen, setIsOpen] = useState(false);
	const itemMenus = [
		{
			text: "Apresentação",
			link: "#",
		},
		{
			text: "Carreira",
			link: "#",
		},
		{
			text: "Habilidades",
			link: "#",
		},
		{
			text: "Blog",
			link: "#",
		},
	];
	return (
		<MenuBar>
			<section className="responsive-content">
				<MenuButton active={isOpen} setActive={setIsOpen} />
			</section>
			<MenuModal className={isOpen ? "active" : ""}>
				<div className="responsive-content">
					{itemMenus.map((menu, key) => (
						<div key={key} className={isOpen ? "active" : ""}>
							<Link href={menu.link}>
								<a>{menu.text}</a>
							</Link>
						</div>
					))}
				</div>
			</MenuModal>
		</MenuBar>
	);
}
