import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { useGlobalState } from "./context/context";
import Nav from "./Nav";
import Login from "./Login";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'post_no_bill';
        src: url('/custom/postnobillscolombo-bold.ttf');
        font-weight: normal;
        font-style: normal;
    }


    :root {
        --red: #ff0000;
        --black: rgb(4, 3, 6);;
        --lightGrey: rgb(24, 24, 24);
        --lightGray: var(---lightGray);
        --offWhite: #ededed;
        --orange: #F0A432;
        --maxWidth: 1200px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;
        /* font-size: 10px; */
        font-size: 62.5%;
    }


    *, *:before, *:after {
    box-sizing: inherit;
    }


    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        overflow-x: hidden;
        background-color: var(--lightGrey);
        color: white;
        /* position: relative; */
    }

    
    a {
        text-decoration: none;
        color: var(---black);
    }
    a:hover {
        text-decoration: underline;
    }
    
    button {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        cursor: pointer;
        
    }
`;

const InnerStyles = styled.div`
	/* border: solid red; */
`;

const PageStyle = styled.div`
	/* border: solid blue; */
	display: flex;
	@media screen and (max-width: 765px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;

function Page({ children }) {
	const { code } = useGlobalState();
	return (
		<>
			<GlobalStyles />
			{code ? (
				<PageStyle>
					<Nav />
					<InnerStyles>{children}</InnerStyles>
				</PageStyle>
			) : (
				<Login />
			)}
		</>
	);
}

export default Page;

Page.protoType = {
	children: PropTypes.any,
};

/*
        <PageStyle>
				<Nav />
				<InnerStyles>{children}</InnerStyles>
			</PageStyle>
*/
