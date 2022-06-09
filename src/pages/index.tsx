// Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import { DefaultLayout } from "../components/layout/DefaultLayout";

import Wellcome from "../components/Wellcome";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Vandson Falcão · Portfólio</title>
			</Head>
			<DefaultLayout>
				<Wellcome />
				<div style={{ width: "100%", height: "200vh", background: "var(--black)" }}>
					
				</div>
				<div style={{ width: "100%", height: "300px", background: "var(--purple)" }}>
					<p id="teste">Apresentação</p>
				</div>
			</DefaultLayout>
		</>
	);
};

export default Home;
