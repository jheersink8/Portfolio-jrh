// Context import //
import { ThemeContext } from '../../App';
import React, { useContext, useState } from 'react';

export default function Welcome() {
    // Theme Styles //
    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    const componentBackground = darkTheme ? "black" : "white";
    const textColor = darkTheme ? "white" : "black";
    const emphasis = darkTheme ? "#ffb300" : "blue";
   
    return (
        <>
            {/* Welcome */}
            <div style={{ backgroundColor: 'transparent' }} className="p-5 m-3 d-flex" id="welcome" >

                <h1 style={{ margin: "150px 60px 100px 80px", color: textColor }}>
                    Hello. My name is <span style={{ color: emphasis }}>Jordan Heersink</span>. Thank you so much for visiting my site! Please <span style={{ color: emphasis }}>scroll down</span> to learn more about me, and feel free to <span style={{ color: emphasis }}>contact me</span> with any questions! </h1>
                <img style={{ margin: "100px" }}
                    src='\src\assets\images\lightHeadshot.jpg'
                    width='32%'
                ></img>
            </div>
        </>
    )
};