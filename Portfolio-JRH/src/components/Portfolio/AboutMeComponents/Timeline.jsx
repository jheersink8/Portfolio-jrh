import timeline from '../../../assets/JSON/timeline.js';
import '../../../assets/css/timeLine.css';
import TimelineLayout from './TimelineComponents/TimelineLayout.jsx'




export default function Timeline() {

    const listItems = timeline.map(time =>
        <li key={time.id}>
            {time.year}: {time.event}
        </li>
    );

    return (
        <div>
            {/* Timeline */}
            <h3>My Timeline</h3>
            <br></br>
            <br></br>



            <div className="container experience">
                <div className="row">
                    <div className="col-md-12">
                    </div>

                    <TimelineLayout />
                </div>
            </div>

        </div >
    );
};