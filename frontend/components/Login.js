import React from "react";
import styled from "styled-components";
import { useGlobalState } from "./context/context";

const LoginStyle = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		/* border: solid red; */
		width: 15rem;
		height: 6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1db954;
		border-radius: 2rem;
		color: var(--black);
	}
`;

function Login() {
	const { AUTH_URL } = useGlobalState();
	return (
		<LoginStyle>
			<a href={AUTH_URL}>Login</a>
		</LoginStyle>
	);
}

export default Login;
