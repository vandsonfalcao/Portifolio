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
		--primary-blue:   	#171846;
		--secondary-blue: 	#1b315e;
		--primary-red:    	#931813;
		--secondary-red:  	#ff0a00;

		--footer:         	#706f6f;
		--footer-line:   	rgba(255,255,255,.1);
		--line:           	#dfe9eb;

		--white:          	#ffffff;
		--white-90:       	#f9f8f8;
		--white-70:       	#f6f3ed;
		--white-60:       	#f4f6f5;
		--white-50:       	#f2f4f5;

		--danger:         	#CB2026;
		--success:        	#0dc143;
		--warning:        	#f4bf00;

		--input-text:		#495057;
		--default-text:  	#505050;
		--default-title:  	#111111;
		--link:           	#21a7d0;
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
		color: var(--default-text);
		font-family: 'Rubik', sans-serif;
		font-weight: 400;
		vertical-align: baseline;
		line-height: 26px;
		color: var(--default-text);
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
		font-family: 'Nunito', sans-serif;
		color: var(--default-title);
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
		color: var(--link);
		text-decoration: none;
  }

  // Class
  .linkCTA {
		display: inline-block;
		color: var(--white);
		background: var(--primary-red);
		border-radius: 4px;
		padding: 12px 40px;
		text-transform: uppercase;
		font-weight: 700;
		transition: all 0.3s ease;
		&:hover {
			background: var(--primary-blue);
		}
  }
`;
