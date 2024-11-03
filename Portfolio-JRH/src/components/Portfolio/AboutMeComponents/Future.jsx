import { languages, frameworks, tools } from '../../../assets/JSON/future';

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
    return (
        <div>
            {/* Future Development */}
            <h3>What I'm Learning Next</h3>

            <h4>Programming Languages</h4>
            <ul>
                {languageItems}
            </ul>

            <h4>Libraries & Frameworks</h4>
            <ul>
                {frameworkItems}
            </ul>

            <h4>Tools & Platforms</h4>
            <ul>
                {toolItems}
            </ul>
        </div>
    );
};