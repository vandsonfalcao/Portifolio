// Style
import { useState } from "react";
import { ResponsiveContainer } from "../../ResponsiveContainer";
import MenuButton from "./MenuButton";
import { MenuBar } from "./style";

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
		<ResponsiveContainer style={{ position: "fixed" }}>
			<MenuBar>
				<section></section>
				<section>
					<MenuButton active={isOpen} />
				</section>
			</MenuBar>
		</ResponsiveContainer>
	);
}
