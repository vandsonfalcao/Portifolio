import styled from "styled-components";

export const Container = styled.footer`
	position: fixed;
	width: 100%;
	height: 0px;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	transition: height ease .4s;
	>div{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		>span{
			font-family: var(--f-title);
			font-weight: 400;
		}
	}
	&.active{
		height: 65px;
	}
`;
