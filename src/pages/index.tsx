import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../components/layout/ResponsiveContainer";
import Stars from "../components/layout/Stars";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Vandson Falcão · Portfólio</title>
			</Head>
			<div style={{ width: "100vw", height: "100vh" }}>
				<Stars />
				<Menu />
			</div>
		</>
	);
};

export default Home;
