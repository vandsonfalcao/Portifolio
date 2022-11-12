// Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import { DefaultLayout } from "../components/layout/DefaultLayout";
import Carrer from "../components/Carrer";
import Wellcome from "../components/Wellcome";
import InitialLoader from "../components/InitialLoader";

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
		</>
	);
};

export default Home;

export async function getStaticProps() {
	return {
		props: {},
	};
}
