import React from "react";
import { useGlobalState } from "../components/context/context";
import Home from "../components/Home";

function index() {
	const { code } = useGlobalState();
	return <Home code={code} />;
}

export default index;
