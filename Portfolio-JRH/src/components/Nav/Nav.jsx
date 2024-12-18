import { DarkMode, LightMode, Mute, Unmute, Hamburger } from '../../assets/svg/NavIcons.jsx';

// Context import //
import { ThemeContext } from '../../App';
import React, { useContext, useState } from 'react';

export default function Nav() {
    // Theme Styles //
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const rootStyles = getComputedStyle(document.documentElement);

    const navTheme = darkTheme ? 'darkNav' : 'lightNav';
    const pillTheme = darkTheme ? 'darkPill' : 'lightPill';
    const emphasisTextTheme = darkTheme ? 'darkEmphasisText' : 'lightEmphasisText';
    const emphasisBorderTheme = darkTheme ? 'darkBorder' : 'lightBorder';
    const btnTheme = darkTheme
        ? rootStyles.getPropertyValue('--defaultDarkText').trim()
        : rootStyles.getPropertyValue('--defaultLightText').trim();
    // Static Styles //
    const btnDefault = { backgroundColor: 'transparent', border: 'none' };

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
        <li key={navLink.id} className={`nav-item mx-3 px-2 d-flex align-items-center`}>
            <a className={`active ${pillTheme} nav-link text-center px-4 fw-semibold`} href={navLink.id}>{navLink.name}</a>
        </li>
    );

    return (
        <nav className={`${emphasisBorderTheme} navbar fixed-top mb-5 px-5 navbar-expand-lg ${navTheme}`}>

            {/* Page Name (i.e. My Name) */}
            <a className={`navbar-brand ${navTheme} mx-0 fw-semibold`} href="/"><span className={emphasisTextTheme}>Jordan Heersink </span>Portfolio</a>

            {/* Hamburger Menu */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <Hamburger color={btnTheme} />
            </button>

            {/* Link Buttons */}
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 nav-pills ">
                    {navItems}
                </ul>


                {/* Theme and Audio Buttons */}
                <hr className="d-lg-none my-2 text-white-100"></hr>
                <div className='d-flex me-5 justify-content-center'>

                    {/* Light Mode/ Dark Mode button */}
                    <button onClick={toggleTheme} style={btnDefault} className='icon-button me-3'>
                        {darkTheme ? <DarkMode color={btnTheme} /> : <LightMode color={btnTheme} />}
                    </button>

                    {/* Audio Mute Button */}
                    <button onClick={toggleMute} style={btnDefault} className='icon-button ms-3'>
                        {mute ? <Mute color={btnTheme} /> : <Unmute color={btnTheme} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};