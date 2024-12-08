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
            <div className='header-space-large header-space-small'></div>
            <div style={{ backgroundColor: 'transparent' }}>
                <div className='container'>
                    <div className='row'>

                        {/* Blurb */}
                        <h1 className={`col-lg-6 pb-5 px-4 ${textColor}`} >
                            Hello. My name is
                            <span className={textEmphasisTheme}> Jordan Heersink</span>.
                            Thank you so much for visiting my site! Please
                            <span className={textEmphasisTheme}> scroll down </span>
                            to learn more about me, and feel free to
                            <span className={textEmphasisTheme}> contact me </span>
                            with any questions!
                        </h1>

                        {/* Headshot */}
                        <div className='col-lg-6 p-0' >
                            <img className='img-fluid mx-auto d-block shadowMe'
                                src='\src\assets\images\lightHeadshot.jpg'
                                alt='Jordan Heersink Headshot'
                                width='90%'



                            ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-space-large bottom-space-small'></div>
        </>
    )
};