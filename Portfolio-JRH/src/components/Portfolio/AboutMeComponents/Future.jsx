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
    let [languagesPosition, setLanguagesPosition] = useState(1);
    let [frameworksPosition, setFrameworksPosition] = useState(2);
    let [toolsPosition, setToolsPosition] = useState(3);

    const runLeft = () => {
        setTrianglePosition((prevPosition) => (prevPosition - 120));
        setLanguagesPosition((prevPosition) => (prevPosition === 3 ? 1 : prevPosition + 1));
        setFrameworksPosition((prevPosition) => (prevPosition === 3 ? 1 : prevPosition + 1));
        setToolsPosition((prevPosition) => (prevPosition === 3 ? 1 : prevPosition + 1));
    };

    const runRight = () => {
        setTrianglePosition((prevPosition) => (prevPosition + 120));
        setLanguagesPosition((prevPosition) => (prevPosition === 1 ? 3 : prevPosition - 1));
        setFrameworksPosition((prevPosition) => (prevPosition === 1 ? 3 : prevPosition - 1));
        setToolsPosition((prevPosition) => (prevPosition === 1 ? 3 : prevPosition - 1));
    };

    return (
        <>
            {/* Future Development */}
            <h3 className='text-center'>What I'm Learning Next</h3>
            <div className='d-flex justify-content-around'>

                <div className='d-flex align-items-center'>
                    <button
                        onClick={runLeft}
                        className='triangleButtonLeft'>
                        {languagesPosition === 3 ? 'Programming Languages' : frameworksPosition === 3 ? 'Libraries & Frameworks' : 'Tools & Platforms'}
                    </button>
                </div>

                <div className='Object'>
                    <div className='triangle' style={{ transform: `rotateY(${trianglePosition}deg)` }}>
                        {/* Programming Languages */}
                        <div className={`side position1 ${languagesPosition === 1 ? 'triangleFront' : 'triangleSide'}`}>
                            <h4 className='triangleTitle'>Programming Languages</h4>
                            <ul className='triangleList'>
                                {languageItems}
                            </ul>
                        </div>

                        {/* Libraries and Frameworks */}
                        <div className={`side position2 ${frameworksPosition === 1 ? 'triangleFront' : 'triangleSide'}`}>
                            <h4 className='triangleTitle'>Libraries & Frameworks</h4>
                            <ul className='triangleList'>
                                {frameworkItems}
                            </ul>
                        </div>

                        {/* Tools and Platforms */}
                        <div className={`side position3 ${toolsPosition === 1 ? 'triangleFront' : 'triangleSide'}`}>
                            <h4 className='triangleTitle'>Tools & Platforms</h4>
                            <ul className='triangleList'>
                                {toolItems}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <button
                        onClick={runRight}
                        className={`triangleButtonRight`}>
                        {languagesPosition === 2 ? 'Programming Languages' : frameworksPosition === 2 ? 'Libraries & Frameworks' : 'Tools & Platforms'}
                    </button>
                </div>
            </div>
        </>
    );
};