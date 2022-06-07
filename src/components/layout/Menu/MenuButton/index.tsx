// Modules
import { Dispatch, SetStateAction, useState } from "react";

// Style
import { Button, Container, Text } from "./style";

// Interfaces
interface MenuButtonProps {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}

export default function MenuButton({ active, setActive }: MenuButtonProps) {
	return (
		<Container onClick={() => setActive(!active)}>
			<div>
				<Text className={active ? "active" : ""}>
					<div>
						<span>Menu</span>
					</div>
					<div>
						<span>Fechar</span>
					</div>
				</Text>
			</div>
			<div>
				<Button className={active ? "active" : ""}>
					<div className="tp"></div>
					<div className="md"></div>
					<div className="bt"></div>
				</Button>
			</div>
		</Container>
	);
}
