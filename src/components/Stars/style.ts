import styled from "styled-components";

export const Container = styled.div`
	z-index: -1;
	width: 100%;
	height: 100%;
	max-height: 100vh;
	position: absolute;
	overflow: hidden;
	transition: all ease-in-out 1s;
	> div {
		padding: 1px;
		position: absolute;
		box-shadow: 0px 0px 15px var(--purple);
		border-radius: 100%;
		background: var(--purple);
	}
`;
