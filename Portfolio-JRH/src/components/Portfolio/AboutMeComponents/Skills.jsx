import skills from '../../../assets/JSON/skills';

export default function Skills() {
    const listItems = skills.map(skill =>
        <li key={skill.id}>
            {skill.mastery}
        </li>)

    return (
        <>
            {/* Skills */}
            <h3>My Web Development Toolbelt</h3>
            <ul>
                {listItems}
            </ul>
        </>
    );
};