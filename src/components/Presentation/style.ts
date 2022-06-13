import styled from "styled-components";

export const Container = styled.div`
	align-items: center;
	height: 100vh;
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
				transition: opacity ease-in 1s;
				color: var(--white);
				font-size: 2.25rem;
				font-weight: 600;
			}
			div.char {
				width: 90%;
				height: 350px !important;
				border-radius: 10px 0 10px 0;
				background: url(/char.jpg);
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
			}
			&:first-child {
				flex: 0 10%;
				display: flex;
				justify-content: center;
			}
			&:last-child {
				display: flex;
				position: relative;
				align-items: center;
				justify-content: center;
				> div {
					position: absolute;
					padding: 1.5rem;
					display: flex;
					align-items: center;
					width: 65%;
					height: 100%;
					&:first-child{
						transition-property: opacity;
						transition-timing-function: ease-in-out;
						transition-duration: .8s;
						transition-delay: .4s;
						transform: translateX(-25%);
					}
					&:nth-child(2) {
						transition-property: opacity, transform;
						transition-timing-function: ease;
						transition-duration: 1s, 1s;
						transition-delay: .4s, 0s;
						width: 35%;
					}
					&:last-child{
						transition-property: opacity;
						transition-timing-function: ease-in-out;
						transition-duration: .8s;
						transition-delay: .4s;
						transform: translateX(25%);
					}
					&.hidden{
						opacity: 0;
					}
					@media screen and (max-width: 991px){
						flex: 1 !important;
					}
				}
			}
		}
	}
`;
