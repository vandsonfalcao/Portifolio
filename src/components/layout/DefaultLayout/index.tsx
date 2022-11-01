// Modules
import { ReactNode } from "react";

// Style
import { Container } from "./style";

// Components
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import InitialLoader from "../../InitialLoader";

// Interfaces
interface DefaultLayoutProps {
	children: ReactNode;
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<Container>
			<InitialLoader />
			<Menu />
			{children}
			<Footer />
		</Container>
	);
}
