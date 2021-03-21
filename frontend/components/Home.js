import React from "react";
import styled from "styled-components";
import { useGlobalState } from "./context/context";

function Home() {
	return (
		<HomeStyles>
			<div className="content">
				<div className="profile">what the hell</div>
				<div className="tracks">woah</div>
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
