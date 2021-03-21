import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalState } from "./context/context";
import UseAuth from "./UseAuth";

function Home({ code }) {
	const accessToken = UseAuth(code);

	const { spotifyWebApi } = useGlobalState();

	useEffect(() => {
		if (!accessToken) return;
		spotifyWebApi.setAccessToken(accessToken);
	}, [accessToken]);

	return (
		<HomeStyles>
			<div className="content">
				<div className="profile">what the hell</div>
				<div className="tracks"></div>
			</div>
		</HomeStyles>
	);
}

export default Home;

const HomeStyles = styled.div`
	height: 100%;
	width: 93vw;
	display: flex;
	justify-content: center;
	align-items: center;

	.content {
		max-width: var(--maxWidth);
		border: solid yellow;
	}

	@media screen and (max-width: 765px) {
		height: 80vh;
	}
`;
