// Style
import { useEffect, useState } from "react";
import { Container } from "./style";

export function Footer() {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<Container className={isVisible ? "active" : ""}>
			<div className="responsive-container">
				<span>Copyright © 2022 - Todos os direitos reservados</span>
			</div>
		</Container>
	);
}
