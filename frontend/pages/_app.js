import React from "react";
import { SpotifyStateProvider } from "../components/context/context";
import Page from "../components/Page";

function MyApp({ Component, pageProps }) {
	return (
		<SpotifyStateProvider>
			<Page>
				<Component {...pageProps} />
			</Page>
		</SpotifyStateProvider>
	);
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
};

export default MyApp;
