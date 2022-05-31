// Modules
import { useState } from "react";

// Style
import { Button, Container, Text } from "./style";

// Interfaces
interface MenuButtonProps {
	active: boolean;
}

export default function MenuButton({ active }: MenuButtonProps) {
	const [isActive, setIsActive] = useState(active);
	return (
		<Container onClick={() => setIsActive((prev) => !prev)}>
			<div>
				<Text className={isActive ? "active" : ""}>
					<div>
						<span>Menu</span>
					</div>
					<div>
						<span>Fechar</span>
					</div>
				</Text>
			</div>
			<div>
				<Button className={isActive ? "active" : ""}>
					<div className="tp"></div>
					<div className="md"></div>
					<div className="bt"></div>
				</Button>
			</div>
		</Container>
	);
}
