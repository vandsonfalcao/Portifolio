// Modules
import { motion, useTransform, useViewportScroll } from "framer-motion";

// Style
import { Container } from "./style";

export default function Presentation() {
	const { scrollYProgress } = useViewportScroll();
	const titleOpacity = useTransform(scrollYProgress, [0, 0.118,0.125, 0.8, 0.83], [0, 0, 1, 1, 0]);
	const leftOpacity = useTransform(scrollYProgress, [0, 0.155, 0.158, 0.163, 0.17], [0, 0, 1, 1, 0]);
	const rightOpacity = useTransform(scrollYProgress, [0, 0.18, 0.185, 0.19, 0.195], [0, 0, 1, 1, 0]);
	const opacityPic = useTransform(scrollYProgress, [0, 0.128, 0.136, 0.198, 0.2], [0, 0, 1, 1, 0]);
	const movimentPic = useTransform(scrollYProgress, [0, 0.14, 0.15, 0.175, 0.178, 0.198], ["0%", "0%", "100%", "100%", "-100%", "0%"]);

	const xp = new Date().getFullYear() - 2021;
	const age = new Date().getFullYear() - 1995;

	return (
		<Container className="responsive-container">
			<div className="responsive-content">
				<section>
					<motion.h2 style={{ opacity: titleOpacity }}>Apresentação</motion.h2>
				</section>
				<section>
					<motion.div
						style={{
							opacity: leftOpacity,
						}}
					>
						<p>
							Olá, tenho {age} Anos, sempre fui apaixonado por tecnologia, quando
							ainda pequeno ficava fascinado por computadores, então pedi aos meus
							pais para me inscrever em um curso de Informática Básica em seguida Web
							Designer onde enfim tive meu primeiro contato com o pilar de toda a web
							que conhecemos HTML e CSS, ao longo do ensino fundamental, fiz outros
							cursos para me atualizar, então consegui a oportunindade de entrar para
							uma escola profissionalizante, aprendi varias coisas sobre informatica
							mas e então criei minha primeira aplicação em Java ao concluir meus
							estudos.
						</p>
					</motion.div>
					<motion.div
						style={{
							opacity: opacityPic,
							x: movimentPic,
						}}
					>
						<div className="char" />
					</motion.div>
					<motion.div
						style={{
							opacity: rightOpacity,
						}}
					>
						<p>
							Infelismente não consegui aportunidades na area de programação mas
							precisava de um estagio para concluir o ensino profissionalizante, então
							consegui ser selecionado junto com alguns colegas após uma entrevista em
							um provedor de internet, depois de 6 meses me destaquei e fui contratado
							como técnico de informática onde trabalhei durante 8 anos, era envolvido
							com toda parte tecnologica da empresa desde configuração de cliente
							final à servidores de gerencia de rede. Aprendi muito sobre rede de
							computadores de modo geral até que certo dia finalmente decidi trabalhar
							com oque eu realmente gosto!
						</p>
					</motion.div>
				</section>
			</div>
		</Container>
	);
}
