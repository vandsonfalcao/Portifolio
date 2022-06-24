// Modules
import { motion, useTransform, useViewportScroll, Variants } from "framer-motion";

// Style
import { Container } from "./style";

export default function Stars() {
	const { scrollYProgress } = useViewportScroll();
	const colorBg = useTransform(
		scrollYProgress,
		[0.1, 0.105, 0.8, 1],
		["#f7f7f7", "#100303", "#100303", "#f7f7f7"]
	);
	const colorStars = useTransform(
		scrollYProgress,
		[0.1, 0.105, 0.8, 1],
		["#95389e", "#43d8c9", "#43d8c9", "#95389e"]
	);
	const star: Variants = {
		visible: (i) => ({
			opacity: [0, 0, 1, 0.5, 1, 0, 0],
			scale: [0, 0, 1.5, 1, 0.5, 0, 0, 0, 0, 0],
			x: [`${Math.floor(Math.random() * 200) - 50}vw`, "50vw"],
			y: [`${Math.floor(Math.random() * 200) - 50}vh`, "50vh"],
			transition: {
				delay: i * 2,
				repeat: Infinity,
				duration: 15,
			},
		}),
		hidden: {
			opacity: 0,
			scale: 0,
		},
	};
	return (
		<Container
			as={motion.div}
			style={{
				// background: colorBg,
			}}
		>
			{[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			].map((key) => (
				<motion.div
					key={key}
					// style={{ background: colorStars }}
					custom={Math.floor(Math.random() * 9)}
					variants={star}
					animate={"visible"}
				/>
			))}
		</Container>
	);
}
