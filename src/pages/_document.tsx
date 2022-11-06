import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp:
						(App) =>
						(
							props //oloko dois arrow func emendado
						) =>
							sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			};
		} finally {
			sheet.seal();
		}
	}
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
