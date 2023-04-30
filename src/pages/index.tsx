// Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import { DefaultLayout } from "../components/layout/DefaultLayout";
import Carrer from "../components/Carrer";
import Wellcome from "../components/Wellcome";
import InitialLoader from "../components/InitialLoader";
import Script from "next/script";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Vandson Falcão · Portfólio</title>
			</Head>
			<InitialLoader />
			<DefaultLayout>
				<Wellcome />
				<Carrer />
			</DefaultLayout>
			<Script src="scripts/scroll.js" />
		</>
	);
};

export default Home;

export async function getStaticProps() {
	return {
		props: {},
	};
}
