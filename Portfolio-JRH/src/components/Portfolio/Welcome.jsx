// Context import //
import { ThemeContext } from '../../App';
import React, { useContext, useState } from 'react';

export default function Welcome() {
    // Theme Styles //
    const { darkTheme } = useContext(ThemeContext);
    const textEmphasisTheme = darkTheme ? "darkEmphasisText" : "lightEmphasisText";
    const textColor = darkTheme ? "darkText" : "lightText";

    return (
        <>
            {/* Welcome */}
            <div className='space'></div>

            <div style={{ backgroundColor: 'transparent' }}>
                <div className='container'>
                    <div className='row align-items-center d-flex '>

                        {/* Blurb */}
                        <h1 className={`col-lg-6 p-3 ${textColor}`} >
                            Hello. My name is
                            <span className={textEmphasisTheme}> Jordan Heersink</span>.
                            Thank you so much for visiting my site! Please
                            <span className={textEmphasisTheme}> scroll down </span>
                            to learn more about me, and feel free to
                            <span className={textEmphasisTheme}> contact me </span>
                            with any questions!
                        </h1>

                        {/* Headshot */}
                        <img className='col-lg-6 p-3'
                            src='\src\assets\images\lightHeadshot.jpg'
                            width='100%'

                        ></img>
                    </div>
                </div>
            </div>
        </>
    )
};