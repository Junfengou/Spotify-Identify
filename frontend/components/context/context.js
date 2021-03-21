import { useState, useContext, createContext } from "react";

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function useGlobalState() {
	const all = useContext(LocalStateContext);
	return all;
}

function SpotifyStateProvider({ children }) {
	const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_REDIRECT_URI}&scope=${process.env.NEXT_SCOPE_STREAMING}%20${process.env.NEXT_SCOPE_Email}%20${process.env.NEXT_SCOPE_PRIVATE}%20${process.env.NEXT_SCOPE_LIBRARY_READ}%20${process.env.NEXT_SCOPE_MODIFY}%20${process.env.NEXT_SCOPE_PLAYBACK_STATE}%20${process.env.NEXT_SCOPE_MODIFY_PLAYBACK}`;

	let code;
	if (typeof window !== "undefined") {
		code = new URLSearchParams(window.location.search).get("code");
	}

	return (
		<LocalStateProvider value={{ AUTH_URL, code }}>
			{children}
		</LocalStateProvider>
	);
}

export { useGlobalState, SpotifyStateProvider };
