// Modules
import { useState } from "react";
import { motion } from "framer-motion";

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
		},
		{
			text: "Carreira",
		},
		{
			text: "Habilidades",
		},
		{
			text: "Blog",
		},
	];
	return (
		<MenuBar>
			<section>
				<MenuButton active={isOpen} setActive={setIsOpen} />
			</section>
			<MenuModal className={isOpen ? "active" : ""}>
				<div>
					{isOpen &&
						itemMenus.map((menu, key) => (
							<motion.div
								initial={
									key % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }
								}
								animate={
									isOpen && {
										opacity: 1,
										x: key % 2 === 0 ? 50 : -50,
										transition: { delay: 1, duration: 0.8 },
									}
								}
								key={key}
							>
								<Link href={"#"}>
									<a>{menu.text}</a>
								</Link>
							</motion.div>
						))}
				</div>
			</MenuModal>
		</MenuBar>
	);
}
