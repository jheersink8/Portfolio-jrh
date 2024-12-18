import projects from '../../assets/JSON/projects.js';

export default function Projects() {
    const listItems = projects.map(project =>
        <ul key={project.id}>
            <li>{project.title}</li>
            <li>{project.description}</li>
            <li>{project.deployLink}</li>
            <li>{project.githubLink}</li>
        </ul>
    );

    return (
        <>
            <div className='top-space-large top-space-small'></div>
            {/* Projects */}
            <div id="projects">
                <h2>Web Development Projects</h2>
                {listItems}
            </div>
            <div className='bottom-space-large bottom-space-small'></div>
        </>
    );
};

