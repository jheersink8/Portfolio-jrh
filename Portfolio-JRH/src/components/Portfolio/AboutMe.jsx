import Bio from './AboutMeComponents/Bio';
import TimelineLayout from './AboutMeComponents/TimelineLayout';
import Skills from './AboutMeComponents/Skills'
import Future from './AboutMeComponents/Future'

// Context import //
import { ThemeContext } from '../../App';
import React, { useContext, useState } from 'react';



export default function AboutMe() {
    // Theme Styles //
    const { darkTheme } = useContext(ThemeContext);
    const textColor = darkTheme ? "darkText" : "lightText";
    const componentBackground = darkTheme ? "darkComponentBackground" : "lightComponentBackground";
    const aboutButtonTheme = darkTheme ? "darkAboutButton" : "lightAboutButton";

    // Button Design and Functionality //
    const buttonContent = [
        { id: 'bio', name: 'My Bio' },
        { id: 'timeline', name: 'Timeline' },
        { id: 'skills', name: 'What I know' },
        { id: 'future', name: 'Future Plans' }
    ];

    const [aboutContent, setAboutContent] = useState('bio');

    function runSwitchAbout(id) {
        setAboutContent(id);
    };

    const switchButtons = buttonContent.map(button =>
        <button onClick={() => runSwitchAbout(button.id)} key={button.id} className={`px-3 py-1 mx-2 ${aboutButtonTheme}`}>{button.name}</button>)

    return (
        <>
            {/* About Me */}
            <div className='container ' id="about-me">
                <div className='space-large space-small'></div>


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
                            <div className={`col p-5 ${componentBackground}`} style={{ height: '700px' }}>
                                {aboutContent === 'bio' && <Bio />}
                                {aboutContent === 'timeline' && <TimelineLayout />}
                                {aboutContent === 'skills' && <Skills />}
                                {aboutContent === 'future' && <Future />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};