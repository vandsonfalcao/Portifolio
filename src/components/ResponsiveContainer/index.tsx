// Next
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

// Style
import { Container } from "./style";

// Interfaces
interface ResponsiveContainerProps {
	children?: ReactNode;
	style?: CSSProperties;
}

export function ResponsiveContainer({ children, style }: ResponsiveContainerProps) {
	return (
		<Container style={style}>
			<div>{children}</div>
		</Container>
	);
}
