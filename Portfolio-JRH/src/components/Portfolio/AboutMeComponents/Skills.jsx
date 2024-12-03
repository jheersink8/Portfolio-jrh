import skills from '../../../assets/JSON/skills';

import ApiSVG from '../../../assets/svg/skills/ApiSVG';
import BootstrapSVG from '../../../assets/svg/skills/BootstrapSVG';
import CssSVG from '../../../assets/svg/skills/CssSVG';
import ExpressSVG from '../../../assets/svg/skills/ExpressSVG';
import GithubSVG from '../../../assets/svg/skills/GithubSVG';
import GraphqlSVG from '../../../assets/svg/skills/GraphqlSVG';
import HerokuSVG from '../../../assets/svg/skills/HerokuSVG';
import HtmlSVG from '../../../assets/svg/skills/HtmlSVG';
import JavascriptSVG from '../../../assets/svg/skills/JavascriptSVG';
import JquerySVG from '../../../assets/svg/skills/JquerySVG';
import MongodbSVG from '../../../assets/svg/skills/MongodbSVG';
import NodeSVG from '../../../assets/svg/skills/NodeSVG';
import NpmSVG from '../../../assets/svg/skills/NpmSVG';
import PostgresqlSVG from '../../../assets/svg/skills/PostgresqlSVG';
import ReactSVG from '../../../assets/svg/skills/ReactSVG';
import SqlSVG from '../../../assets/svg/skills/SqlSVG';


export default function Skills() {
    let svgH =120;
    let svgW =120;
    let color = '#ffffff';
    
    const listItems = skills.map(skill =>
        <li key={skill.id}>
            {skill.mastery}
        </li>)

    return (
        <div>
            {/* Skills */}
            <h3>My Web Development Toolbelt</h3>
            <div className='border'>
                <ApiSVG width={svgW} height={svgH} color={color}/>
                <BootstrapSVG width={svgW} height={svgH} color={color}/>
                <CssSVG width={svgW} height={svgH} color={color}/>
                <ExpressSVG width={svgW} height={svgH} color={color}/>
                <GithubSVG width={svgW} height={svgH} color={color}/>
                <GraphqlSVG width={svgW} height={svgH} color={color}/>
                <HerokuSVG width={svgW} height={svgH} color={color}/>
                <HtmlSVG width={svgW} height={svgH} color={color}/>
                <JavascriptSVG width={svgW} height={svgH} color={color}/>
                <JquerySVG width={svgW} height={svgH} color={color}/>
                <MongodbSVG width={svgW} height={svgH} color={color}/>
                <NodeSVG width={svgW} height={svgH} color={color}/>
                <NpmSVG width={svgW} height={svgH} color={color}/>
                <PostgresqlSVG width={svgW} height={svgH} color={color}/>
                <ReactSVG width={svgW} height={svgH} color={color}/>
                <SqlSVG width={svgW} height={svgH} color={color}/>
            </div>


            
            <ul>
                {listItems}

            </ul>
        </div >
    );
};