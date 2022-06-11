// Modules
import { motion, useTransform, useViewportScroll } from "framer-motion";

// Style
import { Container } from "./style";

// Icons
import { BsChevronDoubleDown } from "react-icons/bs";
import Stars from "../Stars";

export default function Wellcome() {
	const { scrollYProgress } = useViewportScroll();
	const frameScale = useTransform(scrollYProgress, [0.0, 0.25, 0.725, 0.726], [1, 1, 170, 1]);
	const frameTranslateY = useTransform(
		scrollYProgress,
		[0.0, 0.25, 0.725, 0.726],
		["0vh", "70vh", "-870vh", "0vh"]
	);
	const frameOpacity = useTransform(scrollYProgress, [0.725, 0.98, 0.981], [1, 1, 0]);
	const frameColor = useTransform(scrollYProgress, [0.726, 0.727], ["#fff", "#000"]);

	return (
		<>
			<Stars />
			<Container
				as={motion.div}
				className="responsive-container"
				// style={{ backgroundColor: frameColor }}
			>
				<motion.div className="responsive-content">
					<motion.div>
						<h2>Seja Bem-vindo ao meu portifólio,</h2>
						<br />
						<motion.h1
							style={
								{
									// y: frameTranslateY,
									// scale: frameScale,
									// opacity: frameOpacity,
								}
							}
						>
							Me chamo <span className="gradiente-color">Vandson Falcão</span>, sou{" "}
							<span className="gradiente-color">desenvolvedor</span> de aplicações
							web.
						</motion.h1>
					</motion.div>
					<div>
						<motion.span
							animate={
								{
									// y: [4, 0, 4],
									// transition: { delay: 2, duration: 1, repeat: Infinity },
								}
							}
						>
							<BsChevronDoubleDown />
						</motion.span>
					</div>
				</motion.div>
			</Container>
		</>
	);
}
