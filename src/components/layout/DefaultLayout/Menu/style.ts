import styled from "styled-components";

export const MenuBar = styled.nav`
	z-index: 99;
	width: 100%;
	height: 62px;
	position: fixed;
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	backdrop-filter: saturate(180%) blur(5px);
	background: rgba(247, 247, 247, .7);
	> section {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		height: 65px;
	}
	@media screen and (min-width: 991px) {
		> section {
			display: none;
		}
	}
`;

export const MenuModal = styled.aside`
	// desktop web
	@media screen and (min-width: 991px) {
		height: auto !important;
		opacity: 1 !important;
		> div {
			flex-direction: row !important;
			> div {
				display: unset !important;
				opacity: 1 !important;
				animation: unset !important;
				padding: 1rem 0;
				> a {
					font-size: 1.25rem !important;
				}
			}
		}
	}
	position: absolute;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 0vh;
	opacity: 0;
	transition: height ease 0.4s, opacity ease-in-out 1s;
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
			display: none;
			opacity: 0;
			&.active {
				display: unset;
			}
			&:nth-child(odd) {
				animation: impar-menu forwards 0.8s;
				animation-delay: 0.8s;
			}
			&:nth-child(even) {
				animation: par-menu forwards 0.8s;
				animation-delay: 0.8s;
			}
			@keyframes impar-menu {
				0% {
					opacity: 0;
					transform: translateX(-100px);
				}
				100% {
					opacity: 1;
					transform: translateX(50px);
				}
			}
			@keyframes par-menu {
				0% {
					opacity: 0;
					transform: translateX(+100px);
				}
				100% {
					opacity: 1;
					transform: translateX(-50px);
				}
			}
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
