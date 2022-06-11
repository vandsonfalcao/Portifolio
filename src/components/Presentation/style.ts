import styled from "styled-components";

export const Container = styled.div`
	align-items: center;
	height: 100vh;
	border: solid red 4px;
	background: var(--black);
	> div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 2rem 0;
		> section {
			flex: 1;
			color: var(--white);
			> h2 {
				color: var(--white);
				font-size: 2.25rem;
				font-weight: 600;
			}
			&:first-child{
				flex: 0 10%;
				display: flex;
				justify-content: center;
			}
			&:last-child{
				display: flex;
				justify-content: center;
				>div{
					position: relative;
					flex: 1;
					&:last-child{
					flex: 0 25%;
					}
				}
			}
		}
	}
`;
