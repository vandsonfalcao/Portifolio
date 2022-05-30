import styled from "styled-components";

export const Container = styled.div`
	z-index: -1;
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	> div {
		padding: 1px;
		position: absolute;
		box-shadow: 0px 0px 15px #fff;
		border-radius: 100%;
		background: #fff;
	}
`;
