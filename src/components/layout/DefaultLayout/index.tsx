// Modules
import { ReactNode } from "react";

// Style
import { Container } from "./style";

// Components
import { Menu } from "../Menu";
import Stars from "../../Stars";
import { Footer } from "../Footer";

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
			<div style={{ width: '100%', height: '300px', background: 'var(--purple)' }} />
			<Footer />
		</Container>
	);
}
