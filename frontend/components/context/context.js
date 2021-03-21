import { useState, useEffect, useContext, createContext } from "react";
import SpotifyWebApi from "spotify-web-api-node";

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

	const spotifyWebApi = new SpotifyWebApi({
		clientId: "09629ba1686e4156bfbbf321f979e61a",
	});

	return (
		<LocalStateProvider
			value={{
				AUTH_URL,
				code,
				spotifyWebApi,
			}}
		>
			{children}
		</LocalStateProvider>
	);
}

export { useGlobalState, SpotifyStateProvider };
