// Modules
import HistoryPoint from "./HistoryPoint";

// Style
import { Container } from "./style";

export default function Carrer() {
	const data = [
		{
			title: "Curso WEB Designer",
			place: "Microlins",
			time: "2009 - 2010",
			desc: "CorelDraw, Photoshop, Flash, HTML, Dreamweaver e Projeto de Designer Web",
		},
		{
			title: "Ensino Medio com Curso Técnico Integrado",
			place: "EEEP Dona Creusa Do Carmo Rocha",
			time: "2011 - 2013",
			desc: "Atividades e grupos: Monitor do Laboratório de Informática / Projeto VANT - DRONE, Informática Básica – 100h, Sistemas Operacionais – 40h, Lógica de Programação – 120h, Fundamentos de Orientação a Objeto – 40h, Redes de Computadores – 80h, Gestão e Empreendedorismo – 40h, Técnica de Implementação de Banco de Dados (SQL) – 80h, Análise de Sistemas – 80h, Fundamentos de Banco de Dados (MySQL) – 80h, Programação Orientada a Objeto (JAVA) – 80h, Programação para Web – 100h e Arquitetura e Manutenção de Computadores – 80h.",
		},
		{
			title: "Técnico de Serviços de Informática",
			place: "Sinal Telecom (CLT) | Fortaleza-CE",
			time: "2014 - 2021",
			desc: "Inicialmente trabalhava como estagiário até que fui selecionado dentre uma pequena equipe, e após contratado, exerci funções tais como atendimento Helpdesk e instalações de cliente final, instalação e gestão de redes outdoor e indoor no provedor de internet. Durante minha carreira na empresa, por ter desenvoltura em programação aprendi bem rápido a configurar e gerenciar softwares e hardwares da marca Ubiquit e Mikrotik. Cheguei a fazer consultoria informal com a empresas referente a esses equipamento, pois, realizei a implementação de vários POPs e Concentradores.",
		},
		{
			title: "Curso Técnico em Manutenção e Suporte em Informática",
			place: "CEPEP - Centro de Estudo e Pesqu. em Educação Profissional",
			time: "2015 - 2017",
			desc: "Desenvolver programas, projetar, desenhar, executar, gerir, instalar, inspecionar, realizar manutenção e acompanhar o desenvolvimento de serviços de microinformática:  instalações físicas, redes, hardwares e periféricos, sistemas operacionais, banco de dados e softwares comerciais e para internet. Ler e interpretar manuais e outros documentos em Lígua inglesa. Agir de acordo com valores éticos e legais, respeitando sempre o meio ambiente, a qualidade e a segurança no trabalho. Prestar assitências em serviços mais complexos, ministrar treinamentos e assistir a compra e venda de materiais da área de Microinformática.",
		},
		{
			title: "Curso de ReactJS",
			place: "Rocketseat - Ignite",
			time: "2020 - 2021 - 2022",
			desc: "Framework ReactJS, styled-components, HTML5, SASS, EcmaScript 6, NextJS, TypeScript e mais.",
		},
		{
			title: "Curso de Analise e Desenvolvimento de Sistemas",
			place: "UniFanor Wyden",
			time: "2021 - 2023",
			desc: "[Cursando] - Redes de computadores, segurança da informação, banco de dados, desenvolvimento web, aplicação em nuvem, engenharia de software, engenharia de usabilidade, sistemas operacionais, POO, segurança e direito cibernético, SCRUM, padroes de projetos de software e programação para dispositivos móveis.",
		},
		{
			title: "Desenvolvedor Full-Stack Junior",
			place: "INBEC (CLT) | Fortaleza-CE",
			time: "Jan á Nov de 2022",
			desc: "Manutenção de aplicações legado e implementação de novas features e aplicações, NextJS(React), Laravel(PHP), Docker e Gitlab. <br />Meu primeiro emprego como programador, iniciei em janeiro, a equipe era eu e um dev senior que saiu em fevereiro, então tive que assumir toda demanda sozinho, mas isso não foi um problema, em junho contrataram mais um dev.",
		},
		{
			title: "Desenvolvedor Full-Stack",
			place: "Consultec DBA Bussiness Solutions (PJ) | Remoto",
			time: "Nov de 2022 - Atualmente",
			desc: "<a class='underline-hover' href='http://www.consultecdba.com/'>Consultec DBA</a> - Projetos de aplicações de gestão corporativa.",
		},
	];
	return (
		<Container className="responsive-container" id="carreira">
			<div className="responsive-content">
				<header>
					<span>Educação e Expêriencia</span>
					<h2>Carreira</h2>
					<p>
						<q>Quanto mais estudo, mais sinto que minha mente nisso é insaciável.</q>
						<br />
						<cite>Ada Lovelance</cite>
					</p>
				</header>
				<main>
					{data.map((item, key) => (
						<HistoryPoint key={key} ident={key} item={item} length={data.length} />
					))}
				</main>
			</div>
		</Container>
	);
}
