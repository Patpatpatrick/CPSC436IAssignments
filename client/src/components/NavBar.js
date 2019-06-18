import React from 'react';
import './style.css'
class NavBar extends React.Component {
	render() {
        return (
            <div className="topnav">
                <a className="active" href="http://localhost:3000">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        );
    }
}
export default NavBar;