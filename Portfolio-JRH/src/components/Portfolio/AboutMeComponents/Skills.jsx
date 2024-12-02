import skills from '../../../assets/JSON/skills';

import Api from '../../../assets/svg/skills/Api';
import Bootstrap from '../../../assets/svg/skills/Bootstrap';
// import Css from '../../../assets/svg/skills/Css';
// import Express from '../../../assets/svg/skills/Express';
import Github from '../../../assets/svg/skills/Github';
import Graphql from '../../../assets/svg/skills/Graphql';
import Heroku from '../../../assets/svg/skills/Heroku';
// import Html from '../../../assets/svg/skills/Html';
import Javascript from '../../../assets/svg/skills/Javascript';
// import Jquery from '../../../assets/svg/skills/Jquery';
import Mongodb from '../../../assets/svg/skills/Mongodb';
import Node from '../../../assets/svg/skills/Node';
import Npm from '../../../assets/svg/skills/Npm';
import Postgresql from '../../../assets/svg/skills/Postgresql';
import Reactsvg from '../../../assets/svg/skills/Reactsvg';
// import Sql from '../../../assets/svg/skills/Sql';


export default function Skills() {
    const listItems = skills.map(skill =>
        <li key={skill.id}>
            {skill.mastery}
        </li>)

    return (
        <div>
            {/* Skills */}
            <h3>My Web Development Toolbelt</h3>
            <div className='border' style={{width: '50%'}}>
                <Api />
            </div>


            
            <ul>
                {listItems}

            </ul>
        </div >
    );
};