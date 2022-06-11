// Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import { DefaultLayout } from "../components/layout/DefaultLayout";
import Presentation from "../components/Presentation";

import Wellcome from "../components/Wellcome";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Vandson Falcão · Portfólio</title>
			</Head>
			<DefaultLayout>
				<Wellcome />
				<Presentation />
			</DefaultLayout>
		</>
	);
};

export default Home;
