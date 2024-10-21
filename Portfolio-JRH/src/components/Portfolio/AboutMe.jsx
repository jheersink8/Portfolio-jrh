import Bio from './AboutMeComponents/Bio';
import Timeline from './AboutMeComponents/Timeline';
import Skills from './AboutMeComponents/Skills'
import Future from './AboutMeComponents/Future'


export default function AboutMe() {
    return (
        <>
            {/* About Me */}
            <div>
                <h2>About Me</h2>
                <Bio />
                <Timeline />
                <Skills />
                <Future />
            </div>
        </>
    )
};