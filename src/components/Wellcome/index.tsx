// Modules
import { motion, useTransform, useViewportScroll } from "framer-motion";

// Componets
import Stars from "../Stars";

// Style
import { Container } from "./style";

// Icons
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Wellcome() {
	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0.015, 0.018], [1, 0]);

	return (
		<>
			<Stars />
			<Container as={motion.div} className="responsive-container">
				<motion.div className="responsive-content">
					<motion.div>
						<motion.h2 style={{ opacity: opacity }}>
							Seja Bem-vindo ao meu portifólio,
						</motion.h2>
						<br />
						<motion.h1
							style={{
								opacity: opacity,
							}}
						>
							Me chamo <span className="gradiente-color">Vandson Falcão</span>, sou{" "}
							<span className="gradiente-color">desenvolvedor</span> de aplicações
							web.
						</motion.h1>
					</motion.div>
					<div>
						<motion.section
							style={{ opacity: opacity }}
							animate={{
								y: [8, 0, 8],
								transition: { duration: 1, repeat: Infinity },
							}}
						>
							<div>
								<span>Scroll</span>
							</div>
							<div>
								<BsChevronDoubleDown />
							</div>
						</motion.section>
					</div>
				</motion.div>
			</Container>
		</>
	);
}
