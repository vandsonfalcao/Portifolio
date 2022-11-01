import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
	position: fixed;
	width: 100%;
	z-index: 999;
	overflow: hidden;
	> div {
		background: var(--white);
		position: absolute;
		height: 50%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		&:first-child {
			left: 0;
			top: 0;
			> section {
				content: "";
				background: linear-gradient(
					55deg,
					rgba(67, 216, 201, 1) 0%,
					rgba(149, 56, 158, 1) 100%
				);
				height: 2px;
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
		&:last-child {
			left: 0;
			bottom: 0;
			> section {
				content: "";
				background: linear-gradient(
					55deg,
					rgba(67, 216, 201, 1) 0%,
					rgba(149, 56, 158, 1) 100%
				);
				height: 2px;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
`;

export default Container;
