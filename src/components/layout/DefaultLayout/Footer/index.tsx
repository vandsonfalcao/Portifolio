// Style
import { useEffect, useState } from "react";
import { Container } from "./style";

export function Footer() {
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const checkScroll = () => {
				const { scrollTop, offsetHeight } = document.documentElement;
				const { innerHeight } = window;
				const bottomOfWindow =
					Math.round(scrollTop) + innerHeight === offsetHeight || !Math.round(scrollTop);
				setIsVisible(bottomOfWindow);
			};
			window.addEventListener("scroll", checkScroll);
			return () => window.removeEventListener("scroll", checkScroll);
		}
	}, []);

	useEffect(() => {
		console.log(isVisible);
	}, [isVisible]);
	return (
		<Container className={isVisible ? "active" : ""}>
			<div className="responsive-content">
				<small>
					Copyright © 2022 - Todos os direitos reservados
					<br />
					Feito com NextJS + TypeScript + Styled-components + 💜
				</small>
			</div>
		</Container>
	);
}
