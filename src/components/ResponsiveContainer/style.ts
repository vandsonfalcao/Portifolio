import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
    display: flex;
    justify-content: center;
    > div {
		position: relative;
		flex: 0 1270px;
        padding: 0 1rem;
		@media screen and (max-width: 1366px){
			max-width: 1170px;
		} 
		@media screen and (max-width: 1199px){
			max-width: 960px;
		}
		@media screen and (max-width: 991px){
			max-width: 720px;
		}
		@media screen and (max-width: 767px){
			max-width: 540px;
		}
	}
`;
