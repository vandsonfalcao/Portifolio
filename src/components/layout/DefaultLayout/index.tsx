// Modules
import { ReactNode } from "react";

// Style
import { Container } from "./style";

// Components
import { Footer } from "./Footer";
import { Menu } from "./Menu";

// Interfaces
interface DefaultLayoutProps {
	children: ReactNode;
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<Container>
			<Menu />
			{children}
			<Footer />
		</Container>
	);
}
