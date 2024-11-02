import Bio from './AboutMeComponents/Bio';
import Timeline from './AboutMeComponents/Timeline';
import Skills from './AboutMeComponents/Skills'
import Future from './AboutMeComponents/Future'

// Context import //
import { ThemeContext } from '../../App';
import React, { useContext, useState } from 'react';

// Theme Styles //


export default function AboutMe() {
    return (
        <>
            {/* About Me */}
            <div className='space-large space-small'></div>
            <div id="about-me">
                <h2>About Me!</h2>
                <div className='container'>
                    <div className='row'>
                        <Bio />
                        <Timeline className="d-none" />
                        <Skills className="d-none" />
                        <Future className="d-none" />
                    </div>
                </div>
            </div>
        </>
    )
};