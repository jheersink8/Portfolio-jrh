// Context Import //
import { ThemeContext } from '../../../App';
import React, { useContext, useState } from 'react';
// Import of JSON file with skill data //
import skills from '../../../assets/JSON/skills';
// Import of SVG icons for skills //
import { ApiSVG, BootstrapSVG, CssSVG, ExpressSVG, GithubSVG, GraphqlSVG, HerokuSVG, HtmlSVG, JavascriptSVG, JquerySVG, MongodbSVG, NodeSVG, NpmSVG, PostgresqlSVG, ReactSVG, SqlSVG } from '../../../assets/svg/SkillIcons';
// Mapping of SVG icons so React can render their value not as a string //
const componentMap = {
    ApiSVG,
    BootstrapSVG,
    CssSVG,
    ExpressSVG,
    GithubSVG,
    GraphqlSVG,
    HerokuSVG,
    HtmlSVG,
    JavascriptSVG,
    JquerySVG,
    MongodbSVG,
    NodeSVG,
    NpmSVG,
    PostgresqlSVG,
    ReactSVG,
    SqlSVG,
};

export default function Skills() {
    const [flip, setFlip] = useState('unflip');
    function toggleFlip() {
        setFlip((prevFlip) => (prevFlip === 'flip' ? 'unflip' : 'flip'));
    };

    // Theme Styles //
    const { darkTheme } = useContext(ThemeContext);
    const svgColor = darkTheme ? 'svgSkillIconDark' : 'svgSkillIconLight';
    let svgH = 90;
    let svgW = 90;

    const listSVG = skills.map(skill => {
        const SvgComponent = componentMap[skill.svg];
        const [isFlipped, setIsFlipped] = useState(false);
        return (

            // Card container // 
            <div
                className="flipPerspective col-3"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
                key={skill.id}
            >

                {/* Card */}
                <div
                    className={`${svgColor} ${isFlipped ? 'flip' : 'unflip'} cardFlip d-flex justify-content-center align-items-center`}
                >
                    {/* Front of card */}
                    <SvgComponent width={svgW} height={svgH} color={svgColor} />

                    {/* Back of card */}
                    <h4 className='back'>{skill.mastery}</h4>
                </div>
            </div>
        );
    });

    return (
        <div>
            {/* Skills */}
            <h3>My Web Development Toolbelt</h3>
            <div className='container'>
                <div className='row'>{listSVG}</div>
            </div >

        </div>
    );
};