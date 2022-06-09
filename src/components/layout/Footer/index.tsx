// Style
import { useEffect, useState } from "react";
import { Container } from "./style";

export function Footer() {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		typeof window !== "undefined" &&
			window.addEventListener("scroll", () => {
				const { scrollTop, offsetHeight } = document.documentElement;
				const { innerHeight } = window;
				const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;
				setIsVisible(bottomOfWindow);
			});
	}, []);
	return (
		<Container className={isVisible ? "active" : ""}>
			<div className="responsive-container">
				<span>Copyright © 2022 - Todos os direitos reservados</span>
			</div>
		</Container>
	);
}
