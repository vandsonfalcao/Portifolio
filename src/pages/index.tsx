import type { NextPage } from "next";
import Head from "next/head";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Vandson Falcão · Portfólio</title>
			</Head>
			<DefaultLayout>
				<ResponsiveContainer
					style={{ height: "100%", display: "flex", alignItems: "center" }}
				>
					<h1 style={{ fontSize: "8rem" }}>Make you dreams can true</h1>
				</ResponsiveContainer>
			</DefaultLayout>
		</>
	);
};

export default Home;
