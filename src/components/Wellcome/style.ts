import styled from "styled-components";

export const Container = styled.div`
	> div {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		text-align: center;
		h1 {
			transition-property: opacity;
			transition-timing-function: ease;
			transition-duration: 0.4s;
			font-size: 3rem;
		}
		h2 {
			transition-property: scale;
			transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
			transition-duration: 4s;
			font-size: 1.25rem;
			font-weight: 400;
		}
		> div {
			display: flex;
			flex-direction: column;
			justify-content: end;
			&:first-child {
				flex: 0 70vh;
			}
			&:last-child {
				flex: 0 10vh;
			}

			> span {
				transition-property: opacity;
				transition-timing-function: ease;
				transition-duration: 0.4s;
				font-size: 3rem;
				line-height: 1;
				opacity: 0.4;
			}
			svg {
				color: var(--purple);
			}
		}
		@media screen and (min-width: 991px) {
			div {
				justify-content: center;
			}
			h1 {
				font-size: 4rem;
			}
			h2 {
				font-size: 2.25rem;
				font-weight: 400;
			}
		}
	}
`;
