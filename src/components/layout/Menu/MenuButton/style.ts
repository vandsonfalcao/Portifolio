import styled from "styled-components";

export const Container = styled.div`
	z-index: 99;
	cursor: pointer;
	width: 170px;
	height: 45px;
	display: flex;
	overflow: hidden;
	> div {
		flex: 1;
		height: 100%;
	}
`;
export const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: relative;
	> div {
		position: absolute;
		transition: all ease-in-out 1s;
		> span {
			font-size: 1.5rem;
			font-family: var(--f-title);
			line-height: 1;
		}
		&:last-child {
			transform: translateX(-100px);
			opacity: 0;
		}
	}
	&.active {
		> div {
			overflow-x: hidden;
			&:first-child {
				transform: translateX(-100px);
				opacity: 0;
			}
			&:last-child {
				transform: translateX(80px);
				opacity: 1;
			}
		}
	}
`;
export const Button = styled.div`
	padding: 0.5rem 1.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	justify-content: space-around;
	> div {
		transition: all ease-in-out 1s;
		width: 100%;
		height: 1px;
		background: var(--black);
	}
	&.active {
		> div {
			&.tp {
				width: 30%;
				transform: translate(-100px, 5px) rotate(-45deg);
			}
			&.md {
				width: 60%;
				transform: translate(-90px);
			}
			&.bt {
				width: 30%;
				transform: translate(-100px, -5px) rotate(45deg);
			}
		}
	}
`;
