import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
  }
  /*----------------------------Variaveis-------------------------*/
  :root {
		// Colors
		--white: 			rgb(247, 247, 247); //#f7f7f7
		--white-70: 	rgba(247, 247, 247, 0.7);
		--teal:				rgb(67, 216, 201); //#43d8c9
		--purple: 		rgb(149, 56, 158); // #95389e
		--black:			rgb(16, 3, 3); //#100303

		// Fonts
		--f-title: 		'Raleway', sans-serif;
		--f-text:		'Nunito', sans-serif;
  }
  html{
	scroll-behavior: smooth;
  }

  /*----------------------------Media----------------------------*/
  @media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
  }
  @media (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
  }
  /*-------------------------------------------------------------*/
  body {
	  	background: var(--white);
		color: var(--black);
		font-family: var(--f-text);
		font-weight: 400;
		vertical-align: baseline;
		line-height: 1.8;
		-webkit-font-smoothing: antialiased;
		overflow-x: hidden;
  }
  p {
		margin: 0 0 26px;
		line-height: 1.8;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
		font-family: var(--f-title);
		margin: 0 0 26px;
		line-height: 1.2;
  }
  input, textarea, select, button {
	 	font: 400, 1rem 'Rubik', sans-serif;
  }
  input[type=button], input[type=submit]{
	  cursor: pointer;
  }

  button {
	 	cursor: pointer;
  }

  a {
		text-decoration: none;
		&.underline-hover {
				position: relative;
				&::before {
					content: "";
					position: absolute;
					width: 100%;
					height: 1px;
					border-radius: 1px;
					background: inherit;
					bottom: 0;
					left: 0;
					transform-origin: right;
					transform: scaleX(0);
					transition: transform 0.3s ease-in-out;
				}
				&:hover::before {
					transform-origin: left;
					transform: scaleX(1);
				}
			}
  }

  // Global Classes
  .responsive-container{
	display: flex;
	justify-content: center;
	overflow: hidden;
	padding: 62px;
	@media screen and (max-width: 767px) {
		padding: 0;
	}
}
.responsive-content{
		position: relative;
		flex: 0 1270px;
		max-width: 1270px;
		padding: 0 1rem;
		@media screen and (max-width: 1366px) {
			max-width: 1170px;
		}
		@media screen and (max-width: 1199px) {
			max-width: 960px;
		}
		@media screen and (max-width: 991px) {
			max-width: 720px;
		}
		@media screen and (max-width: 767px) {
			max-width: 540px;
		}
  }
  .gradiente-color{
	position: relative;
	background-image: linear-gradient(55deg, rgba(67,216,201,1) 0%, rgba(149,56,158,1) 100%);
	background-clip: text;
	-webkit-background-clip: text;
	
	color: transparent;
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 4px;
		border-radius: 4px;
		background: linear-gradient(55deg, rgba(67,216,201,1) 0%, rgba(149,56,158,1) 100%);
		bottom: 0;
		left: 0;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}
	&:hover::before {
		transform-origin: left;
		transform: scaleX(1);
	}
}
`;
