import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 999;
	overflow: hidden;
	> div {
		/* bg */
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		background: var(--white);
		> div {

			/* ContainerGate */
			position: absolute;
			width: 120%;
			height: 100%;
			div {
				/* Gates */
				background: var(--white);
				position: absolute;
				width: 100%;
				height: 50%;
				left: 0;
				> section {
					content: "";
					background: linear-gradient(
						55deg,
						rgba(67, 216, 201, 1) 0%,
						rgba(149, 56, 158, 1) 100%
					);
					height: .8%;
					position: absolute;
					left: 0;
				}
				&:first-child {
					/* GateOne */
					top: 0;
					> section {
						bottom: 0;
					}
				}
				&:last-child {
					/* GateTwo */
					bottom: 0;
					> section {
						top: 0;
					}
				}
			}
		}
	}
`;

export default Container;
