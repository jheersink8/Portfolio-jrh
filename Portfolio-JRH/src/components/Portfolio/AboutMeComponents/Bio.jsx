// Context import //
import { ThemeContext } from '../../../App';
import React, { useContext, useState } from 'react';

export default function Bio() {
    // Theme Styles //
    const { darkTheme } = useContext(ThemeContext);
    const textEmphasisTheme = darkTheme ? "darkEmphasisText" : "lightEmphasisText";
    const textColor = darkTheme ? "darkText" : "lightText";

    return (
        <div >
            {/* Bio */}
            <h3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Who I Am</h3>
            <br></br>
            <div className='px-5' >
                <h4>I am an
                    <span className={textEmphasisTheme}> IT leader </span>and
                    <span className={textEmphasisTheme}> full-stack web developer </span>with over nine years of experience in technical support management and leadership. My passion lies in leveraging technology to solve business challenges and improve user experiences. I’ve developed a deep understanding of what end users need and how to create intuitive,
                    user-centered digital solutions. Alongside my technical skills in web development, I’m experienced in managing
                    <span className={textEmphasisTheme}> cross-functional teams</span>, implementing
                    <span className={textEmphasisTheme}> IT strategies</span>, and driving
                    <span className={textEmphasisTheme}> large-scale projects</span>.
                </h4>
                <br></br>
                <h4>I hold a
                    <span className={textEmphasisTheme}> BA in Information Systems Management</span>, a
                    <span className={textEmphasisTheme}> Master’s degree in Business Administration</span>, and a
                    <span className={textEmphasisTheme}> Full-Stack Web Development Certificate from Denver University</span>. Whether leading IT teams or building web solutions, my goal is to deliver value through innovation, strategic thinking, and a commitment to excellence.
                </h4>
                <br></br>
                <h4>Please take a look at my
                    <span className={textEmphasisTheme}> Timeline </span>for some of my proudest achievements, explore the
                    <span className={textEmphasisTheme}> What I Know </span> section to see the web development skills in my toolbelt, and check out
                    <span className={textEmphasisTheme}> Future Plans </span>to learn what I’m currently pursuing.</h4>
            </div>
        </div >
    )
};