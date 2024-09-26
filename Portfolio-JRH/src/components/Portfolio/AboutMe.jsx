import { useState } from 'react';

export default function AboutMe() {

    const [mode, setMode] = useState('light');

    const toggleMode = () => { console.log(mode) };

    return (
        <>
            <button className={mode} onClick={toggleMode}>Switch Mode</button>
        </>
    );
};