// Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import { DefaultLayout } from "../components/layout/DefaultLayout";
import Carrer from "../components/Carrer";
import Wellcome from "../components/Wellcome";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Vandson Falcão · Portfólio</title>
			</Head>
			<DefaultLayout>
				<Wellcome />
				<Carrer />
			</DefaultLayout>
		</>
	);
};

export default Home;
