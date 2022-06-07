import type { NextPage } from "next";
import Head from "next/head";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

// Icons
import { BsChevronDoubleDown } from "react-icons/bs";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Vandson Falcão · Portfólio</title>
			</Head>
			<DefaultLayout>
				<ResponsiveContainer
					style={{
						height: "100vh",
						display: "flex",
						alignItems: "center",
						padding: "62px",
					}}
				>
					<h2 style={{ fontSize: "2.5rem", fontWeight: 400 }}>
						Seja Bem-vindo ao meu portifólio,
					</h2>
					<h1 style={{ fontSize: "5rem" }}>
						Me chamo <span className="gradiente-color">Vandson Falcão</span>, sou{" "}
						<span className="gradiente-color">desenvolvedor</span> de aplicações web.
					</h1>
					<br />
					<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
						<div style={{ fontSize: '2.5rem', lineHeight: 1, opacity: .4 }}>
							<BsChevronDoubleDown />
						</div>
					</div>
				</ResponsiveContainer>
			</DefaultLayout>
		</>
	);
};

export default Home;
