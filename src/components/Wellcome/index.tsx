// Modules
import { motion } from "framer-motion";

// Style
import { Container } from "./style";

// Icons
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Wellcome() {
	return (
		<Container className="responsive-container">
			<div className="responsive-content">
				<div>
					<h2>Seja Bem-vindo ao meu portifólio,</h2>
					<br />
					<h1>
						Me chamo <span className="gradiente-color">Vandson Falcão</span>, sou{" "}
						<span className="gradiente-color">desenvolvedor</span> de aplicações web.
					</h1>
				</div>
				<div>
					<motion.span animate={{ y: [4,0, 4], transition: { delay: 2, duration: 1, repeat: Infinity} }}>
						<BsChevronDoubleDown/>
					</motion.span>
				</div>
			</div>
		</Container>
	);
}
