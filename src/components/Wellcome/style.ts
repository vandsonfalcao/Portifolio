import styled from "styled-components";

export const Container = styled.div`
	align-items: center;
	> div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		h1 {
			font-size: 3.5rem;
		}
		h2 {
			font-size: 1.25rem;
			font-weight: 400;
		}
		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			&:last-child {
				flex: 0 10%;
				align-items: center;
			}

			> span {
				font-size: 3rem;
				line-height: 1;
				opacity: 0.4;
			}
		}
	}
`;
