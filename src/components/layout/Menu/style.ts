import styled from "styled-components";

export const MenuBar = styled.nav`
	z-index: 99;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	> section {
		position: absolute;
		display: flex;
		align-items: center;
		padding: 0 10%;
		width: 100%;
		height: 65px;
		display: flex;
		justify-content: flex-end;
	}
`;

export const MenuModal = styled.aside`
	position: absolute;
	width: 100%;
	height: 0vh;
	opacity: 0;
	transition: all ease 0.8s;
	background: var(--white);
	&.active {
		height: 100vh;
		opacity: 0.98;
	}
	> div {
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		> div {
			> a {
				font-size: 2.5rem;
				font-family: var(--f-title);
				color: var(--black);
				position: relative;
				&::before {
					content: "";
					position: absolute;
					width: 100%;
					height: 1px;
					border-radius: 1px;
					background: var(--black);
					bottom: 0;
					left: 0;
					transform-origin: right;
					transform: scaleX(0);
					transition: transform 0.3s ease-in-out;
				}
				&:hover::before {
					transform-origin: left;
					transform: scaleX(1);
				}
			}
		}
	}
`;
