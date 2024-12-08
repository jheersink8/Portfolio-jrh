import { languages, frameworks, tools } from '../../../assets/JSON/future';
import { useState } from 'react';

const languageItems = languages.map(language =>
    <li key={language.id}>
        {language.learn}
    </li>
);

const frameworkItems = frameworks.map(framework =>
    <li key={framework.id}>
        {framework.learn}
    </li>
);

const toolItems = tools.map(tool =>
    <li key={tool.id}>
        {tool.learn}
    </li>
);

export default function Future() {
    let [trianglePosition, setTrianglePosition] = useState(0);

    const runLeft = () => {
        setTrianglePosition((prevPosition) => (prevPosition - 120));
    };

    const runRight = () => {
        setTrianglePosition((prevPosition) => (prevPosition + 120));
    };

    return (
        <>

            {/* Future Development */}
            <h3 className='text-center'>What I'm Learning Next</h3>
            <div className='d-flex justify-content-around'>
                <button onClick={runLeft}>Left</button>

                <div className='Object'>
                    <div className='triangle' style={{ transform: `rotateY(${trianglePosition}deg)` }}>
                        {/* Programming Languages */}
                        <div className={`side languages position1`}>
                            <h4>Programming Languages</h4>
                            <ul>
                                {languageItems}
                            </ul>
                        </div>

                        {/* Libraries and Frameworks */}
                        <div className={`side frameworks position2`}>
                            <h4>Libraries & Frameworks</h4>
                            <ul>
                                {frameworkItems}
                            </ul>
                        </div>

                        {/* Tools and Platforms */}
                        <div className={`side tools position3`}>
                            <h4>Tools & Platforms</h4>
                            <ul>
                                {toolItems}
                            </ul>
                        </div>
                    </div>
                </div>
                <button onClick={runRight}>Right</button>
            </div>
        </>
    );
};