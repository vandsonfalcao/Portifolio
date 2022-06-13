import styled from "styled-components";

export const Container = styled.div`
	> div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		h1 {
			font-size: 3rem;
			transition-property: opacity, transform;
			transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
			transition-duration: 1s ,2s;
		}
		h2 {
			font-size: 1.25rem;
			font-weight: 400;
			transition: all ease .8s;
		}
		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			&:first-child {
				flex: 0 70vh;
				align-items: center;
			}
			&:last-child {
				flex: 0 10vh;
				align-items: center;
			}

			> span {
				font-size: 3rem;
				line-height: 1;
				opacity: 0.4;
			}
			svg{
				color: var(--purple);
			}
		}
		@media screen and (min-width: 991px) {
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
