import Bio from './AboutMeComponents/Bio';
import Timeline from './AboutMeComponents/Timeline';
import Skills from './AboutMeComponents/Skills'
import Future from './AboutMeComponents/Future'

// Context import //
import { ThemeContext } from '../../App';
import React, { useContext, useState } from 'react';



export default function AboutMe() {
    // Theme Styles //
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const textColor = darkTheme ? "darkText" : "lightText";
    const componentBackground = darkTheme ? "darkComponentBackground" : "lightComponentBackground";


    // Button Design //
    const buttonContent = [
        { id: 'bio', name: 'My Bio' },
        { id: 'timeline', name: 'Timeline' },
        { id: 'skills', name: 'What I know' },
        { id: 'future', name: 'Future Plans' }
    ];

    const switchButtons = buttonContent.map(button =>
        <button key={button.id} className='px-3 py-1 mx-2'>{button.name}</button>)

    return (
        <>
            {/* About Me */}
            <div className='space-large space-small'></div>
            <div className='container ' id="about-me">
                <div className='row mb-3'>
                    <h2 className={textColor}>About Me!</h2>
                </div>
                <div className='row'>
                    <div>
                        {switchButtons}
                    </div>
                </div>
                <div className='row '>
                    <div className='container'>
                        <div className='row'>
                            <div className={`col p-5 ${componentBackground}`} style={{height: '600px' }}>
                                           <Bio />
                                <Timeline />
                                <Skills />
                                <Future />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};