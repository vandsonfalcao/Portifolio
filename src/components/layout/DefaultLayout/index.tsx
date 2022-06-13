// Modules
import { ReactNode } from "react";

// Style
import { Container } from "./style";

// Components
import { Menu } from "./Menu";
import { Footer } from "./Footer";

// Interfaces
interface DefaultLayoutProps {
	children: ReactNode;
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<Container>
			<Menu />
			<main>
				<div>{children}</div>
			</main>
			<Footer />
		</Container>
	);
}
