import timeline from './assets/timeline.js';

export default function Timeline() {

    const listItems = timeline.map(time =>
        <li key={time.id}>
            {time.year}: {time.event}
        </li>
    );

    return (
        <>
            {/* Timeline */}
            <h3>My Timeline</h3>
            <ul>
                {listItems}
            </ul>
        </>
    );
};