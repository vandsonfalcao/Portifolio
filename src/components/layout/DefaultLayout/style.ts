import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 1000vh;
	position: relative;
	>main{
		position: sticky;
		top: 0;
		width: 100%;
		height: 100%;
		max-height: 100vh;
		>div{
			position: relative;
			width: 100%;
			height: 100%;
		}
	}
`;
