import darkMode from '../../assets/svg/darkMode.svg';
import lightMode from '../../assets/svg/lightMode.svg';
import Mute from '../../assets/svg/Mute.jsx';
import Unmute from '../../assets/svg/Unmute.jsx/';

// Context import //
import { ThemeContext } from '../../App';
import React, { useContext, useState } from 'react';

export default function Nav() {
    // Theme Styles //
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const themeBackground = darkTheme ? 'secondary' : 'light';
    const themeText = darkTheme ? 'dark' : 'light';
    const btnIcon = darkTheme ? darkMode : lightMode;
    const btnTheme = darkTheme ? '#ffffff' : '#000000';
    const pillColor = darkTheme ? 'dark' : 'info';

    // Static Styles //
    const btnDefault = { backgroundColor: 'transparent', border: 'none' };
    const btnPills = `nav-item mx-4 px-3 rounded-pill text-bg-${pillColor}`

    // Audio Mute Button //
    const [mute, setMute] = useState(false);
    function toggleMute() {
        setMute(!mute);
    };

    // Navigation Links //
    const navLinks = [
        { id: '#welcome', name: 'Home' },
        { id: '#about-me', name: 'About Me' },
        { id: '#projects', name: 'Projects' },
        { id: '#resume', name: 'Resume' }
    ]
    const navItems = navLinks.map(navLink =>
        <li key={navLink.id} className={btnPills}>
            <a className="nav-link active" href={navLink.id}>{navLink.name}</a>
        </li>
    );

    return (
        <nav className={`navbar fixed-top mb-5 navbar-expand-lg navbar-${themeText} bg-${themeBackground} px-5`}>
            {/* Page Name (i.e. My Name) */}
            <a className="navbar-brand mx-0" href="/">Jordan Heersink Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Link Buttons */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                    {navItems}
                </ul>
                {/* Theme and Audio Buttons */}
                <div className='d-flex mx-5'>
                    <button onClick={toggleTheme} style={btnDefault} className='icon-button'>
                        <img src={btnIcon}></img>
                    </button>
                    <div className='mx-4'></div>
                    <button onClick={toggleMute} style={btnDefault} className='icon-button'>
                        {mute ? <Mute color={btnTheme} /> : <Unmute color={btnTheme} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};