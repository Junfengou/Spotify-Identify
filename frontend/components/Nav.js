import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { CgProfile, CgTimer, CgPlayListAdd } from "react-icons/cg";
import { GiMicrophone, GiMusicalNotes } from "react-icons/gi";

function Nav() {
	return (
		<NavStyles>
			<div className="logo">
				<img
					src="https://res.cloudinary.com/junworks/image/upload/v1616273601/Identify-spotify/Logo_vga9ks.png"
					alt="logo"
				/>
			</div>
			<div className="nav">
				<div className="block">
					<CgProfile className="icon" />
					<p>Profile</p>
				</div>
				<div className="block">
					<GiMicrophone className="icon" />
					<p>Top Artists</p>
				</div>
				<div className="block">
					<GiMusicalNotes className="icon" />
					<p>Top tracks</p>
				</div>
				<div className="block">
					<CgTimer className="icon" />
					<p>Recent</p>
				</div>
				<div className="block">
					<CgPlayListAdd className="icon" />
					<p>Playlist</p>
				</div>
			</div>
			<SiGithub className="git" />
		</NavStyles>
	);
}

export default Nav;

const NavStyles = styled.div`
	height: 100vh;
	width: 13rem;
	background: var(--black);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 8rem;
			margin-top: 2rem;
			object-fit: contain;
		}
	}

	.git {
		height: 3.5rem;
		width: 3.5rem;
		margin-bottom: 4rem;
	}

	.nav {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 40rem;
		width: 100%;
	}

	.block {
		height: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		p {
			font-size: 1rem;
		}
	}

	.icon {
		height: 35%;
		width: 35%;
		margin-top: 1rem;
		/* border: solid red; */
	}

	@media screen and (max-width: 765px) {
		height: 10rem;
		width: 100%;
		position: absolute;
		bottom: 0;

		.logo {
			display: none;
		}
		.git {
			display: none;
		}

		.nav {
			height: 20rem;
			flex-direction: row;
		}

		.block {
			height: 10rem;
			width: 20%;
		}
	}
`;
