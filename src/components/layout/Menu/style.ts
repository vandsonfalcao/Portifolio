import styled from "styled-components";

export const MenuBar = styled.div`
	display: flex;
	gap: 10%;
	justify-content: space-between;
	color: var(--green);
	> section {
		flex: 1;
		padding: 0.5rem;
		&:last-child {
			display: flex;
			justify-content: flex-end;
		}
	}
`;
