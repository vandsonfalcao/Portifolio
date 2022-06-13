// Modules
import { motion, useTransform, useViewportScroll } from "framer-motion";

// Style
import { Container } from "./style";

// Icons
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Wellcome() {
	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.015, 0.018], [1, 1, 0]);
	const titleScale = useTransform(scrollYProgress, [0.0, 0.03, 0.05], [1, 1, 50]);
	const titleOpacity = useTransform(scrollYProgress, [0.0, 0.04, 0.048], [1, 1, 0]);

	return (
		<Container as={motion.div} className="responsive-container">
			<motion.div className="responsive-content">
				<motion.div>
					<motion.h2 style={{ opacity: opacity }}>
						Seja Bem-vindo ao meu portifólio,
					</motion.h2>
					<br />
					<motion.h1
						style={{
							scale: titleScale,
							opacity: titleOpacity,
						}}
					>
						Me chamo <span className="gradiente-color">Vandson Falcão</span>, sou{" "}
						<span className="gradiente-color">desenvolvedor</span> de aplicações web.
					</motion.h1>
				</motion.div>
				<div>
					<motion.span
						style={{ opacity: opacity }}
						animate={{
							y: [4, 0, 4],
							transition: {  duration: 1, repeat: Infinity },
						}}
					>
						<BsChevronDoubleDown />
					</motion.span>
				</div>
			</motion.div>
		</Container>
	);
}
