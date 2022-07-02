// Modules
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HistoryPoint from "./HistoryPoint";

// Style
import { Container } from "./style";

// Icons

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
			desc: "Atividades e grupos: Monitor do Laboratório de Informática / Projeto VANT - Veículo Aéreo não TripuladoAtividades e grupos: Monitor do Laboratório de Informática / Projeto VANT - Veículo Aéreo não Tripulado Informática Básica (Sistemas Operacionais, Word, Excel, Power Point e Internet) – 100h Sistemas Operacionais (Operar, Instalar e Conceitos Básicos) – 40h Lógica de Programação – 120h Fundamentos de Orientação a Objeto – 40h Redes de Computadores (Projeção de Rede Cabeada e Wireless de uma LAN) – 80h Gestão e Empreendedorismo – 40h Técnica de Implementação de Banco de Dados (Linguagem SQL) – 80h Análise de Sistemas – 80h Fundamentos de Banco de Dados (MySQL e MySQL-Front) – 80h Programação Orientada a Objeto (Linguagem JAVA) – 80h Programação para Web (Linguagem HTML & CSS) – 100h Arquitetura e Manutenção de Computadores (Treinamento de suporte Técnico) – 80h",
		},
		{
			title: "Técnico de Serviços de Informática",
			place: "Sinal Telecom | Fortaleza-CE",
			time: "2014 - 2021",
			desc: "Inicialmente trabalhava como estagiário até que fui selecionado dentre uma pequena equipe, e após contratado, exerci funções tais como atendimento Helpdesk e instalações de cliente final, instalação e gestão de redes outdoor e indoor no provedor de internet. Durante minha carreira na empresa, por ter desenvoltura em programação aprendi bem rápido a configurar e gerenciar softwares e hardwares da marca Ubiquit e Mikrotik. Cheguei a fazer consultoria informal com a empresas referente a esses equipamento, pois, realizei a implementação de vários POPs e Concentradores.",
		},
		{
			title: "Técnico em Manutenção e Suporte em Informática",
			place: "CEPEP - Centro de Estudo e Pesqu. em Educação Profissional",
			time: "2015 - 2017",
			desc: "Manutenção e programação de computadores.",
		},
		{
			title: "ReactJS",
			place: "Rocketseat",
			time: "2020 - cursando",
			desc: "Framework ReactJS, styled-components, HTML5, SASS, EcmaScript 6, NextJS, TypeScript e mais.",
		},
		{
			title: "Analise e Desenvolvimento de Sistemas",
			place: "UniFanor Wyden",
			time: "2021 - 2023",
			desc: "Cursando superior.",
		},
		{
			title: "Desenvolvedor WEB",
			place: "INBEC | Fortaleza-CE",
			time: "2022 - Atualmente",
			desc: "Manutenção de aplicações legado e implementação de novas features e aplicações, NextJS(React) e Laravel(PHP).",
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
