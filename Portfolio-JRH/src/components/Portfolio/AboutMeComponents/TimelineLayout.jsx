// Naming convention is changed to TimelineLayout from Timeline due to conflict with Material-UI Timeline component
import timeline from '../../../assets/JSON/timeline.js';
import '../../../assets/css/timeLine.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useState } from 'react';

export default function TimelineLayout() {
    const [index, setIndex] = useState(0);
    function runYearSwitch(id) {
        setIndex(id);
    };

    const listItems = timeline.map(time =>
        <TimelineItem key={time.id}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector style={{ display: `${time.lineValue}` }} />
            </TimelineSeparator>
            <TimelineContent><button onClick={() => runYearSwitch(time.id)}>{time.year}</button></TimelineContent>
        </TimelineItem>
    );

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>My Timeline</h3>
            {/* Timeline */}
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 border'>
                            <Timeline position="left">
                                {listItems}
                            </Timeline>
                        </div>
                        <div className='col-9 border d-flex align-items-center justify-content-center' >
                            <h4 >{timeline[index].event}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};