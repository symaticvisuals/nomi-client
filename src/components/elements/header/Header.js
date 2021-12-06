import React from "react";
import "./Header.css";

function Header() {
	return (
		<div className='header'>
			<div className='slanting-background'>
				<h3>nomi</h3>
			</div>
			<nav className='navbar'>
				<h4>home</h4>
				<h4>about Us</h4>
				<h4>project Details</h4>
			</nav>
			<div className='header-button'>
				<button>Login</button>
			</div>
		</div>
	);
}

export default Header;
