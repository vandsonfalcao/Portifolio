import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&family=Raleway:wght@100;600;900&display=swap"
						rel="stylesheet"
					/>
					{/* <link rel="shortcut icon" href="/images/icon-inbec.svg" type="image/x-icon" /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
