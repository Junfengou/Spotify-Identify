import React, { useEffect, useState } from "react";
import axios from "axios";

function UseAuth(code) {
	const [accessToken, setAccessToken] = useState();
	const [refreshToken, setRefreshToken] = useState();
	const [expireIn, setExpireIn] = useState();

	useEffect(() => {
		axios
			.post("http://localhost:3001/login", {
				code,
			})
			.then((res) => {
				setAccessToken(res.data.accessToken);
				setRefreshToken(res.data.refreshToken);
				setExpireIn(res.data.expireIn); // only last an hour
				window.history.pushState({}, null, "/"); // remove all the junks in the url
			})
			.catch((err) => {
				window.location = "/"; // if there is any error, redirect user back to the login page
			});
	}, [code]);

	console.log({ accessToken });

	// This useEffect will only trigger if either the expire timer runs out or refreshToken is lost
	useEffect(() => {
		if (!refreshToken || !expireIn) return;
		const interval = setInterval(() => {
			axios
				.post("http://localhost:3001/refresh", {
					refreshToken,
				})
				.then((res) => {
					setAccessToken(res.data.accessToken);
					setExpireIn(res.data.expireIn); // only last an hour
				})
				.catch(() => {
					window.location = "/"; // if there is any error, redirect user back to the login page
				});
		}, (expireIn - 60) * 1000); // 1 minute before it expire * 1000 to convert it into milli-seconds
		return () => clearInterval(interval);
	}, [refreshToken, expireIn]);

	return accessToken;
}

export default UseAuth;
