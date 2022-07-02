import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	/* border: solid red 1px; */
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		> header {
			display: flex;
			flex-direction: column;
			max-width: 600px;
			align-items: center;
			> span {
				display: block;
				color: var(--purple);
				font-weight: 700;
				font-size: 1.25rem;
			}
			> h2 {
				font-size: 45px;
				line-height: 2.5rem;
			}
			> p {
				text-align: center;
				font-weight: 600;
				color: #999;
			}
		}
		> main {
			// Mobile
			@media screen and (max-width: 991px){
				flex-direction: column;
				>div{
					flex: 1 !important;
					border-left: solid var(--purple) 1px;
					border-right: none !important;
					align-items: flex-start !important;
					*{
						text-align: left !important;
					}
					>div{
						margin-left: -.67rem;
						left: 0;
					}
				}
			}
			display: flex;
			flex-wrap: wrap;
			> div {
				flex: 0 0 50%;
				display: flex;
				flex-direction: column;
				padding: 2rem 1rem;
				position: relative;
				>div {
					position: absolute;
					z-index: 1;
					top: 2.125rem;
					width: 20px;
					height: 20px;
					background: var(--white);
					border-radius: 100%;
					border: solid var(--purple) 4px;
				}
				> h3 {
					font-family: var(--f-text);
					font-size: 1.25rem;
					font-weight: 700;
					margin: 0;
				}
				> p {
					margin: 0;
					display: block;
					color: #666;
				}
				>span{
					margin: 1rem 0;
					color: var(--white);
					font-weight: 800;
					font-size: .75rem;
					padding: .125rem .5rem;
					background: var(--purple);
					border-radius: 20px;
				}
				&:nth-child(odd){
					border-right: solid var(--purple) .5px;
					align-items: flex-end;
					*{
						text-align: right;
					}
					>div{
						margin-right: -.67rem;
						right: 0;
					}
				}
				&:nth-child(even){
					border-left: solid var(--purple) .5px;
					align-items: flex-start;
					*{
						text-align: left;
					}
					>div{
						margin-left: -.67rem;
						left: 0;
					}
				}
			}
		}
	}
`;
