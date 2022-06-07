// Modules
import { ReactNode } from "react";

// Style
import { Container } from "./style";

// Components
import { Menu } from "../Menu";
import Stars from "../../Stars";

// Interfaces
interface DefaultLayoutProps {
	children: ReactNode;
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<Container>
			<Menu />
			<Stars />
			{children}
			<footer>teste</footer>
		</Container>
	);
}
