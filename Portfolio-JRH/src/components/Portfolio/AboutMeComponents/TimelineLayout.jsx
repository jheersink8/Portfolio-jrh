// Naming convention is changed to TimelineLayout from Timeline due to conflict with Material-UI Timeline component//
import timeline from '../../../assets/JSON/timeline.js';
import '../../../assets/css/timeLine.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// Context Import //
import { ThemeContext } from '../../../App';
import React, { useContext, useState } from 'react';


export default function TimelineLayout() {
    // Theme Styles //
    const { darkTheme } = useContext(ThemeContext);
    const buttonYearTheme = darkTheme ? 'darkTimelineYearButton' : 'lightTimelineYearButton';

    const [index, setIndex] = useState(0);
    function runYearSwitch(id) {

        setIndex(id);
    };

    const listItems = timeline.map(time => {
        const buttonStatus = time.id === index ? 'active' : 'inactive';
        return (
            <TimelineItem key={time.id}>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector style={{ display: `${time.lineValue}` }} />
                </TimelineSeparator>
                <TimelineContent>


                    <button
                        className={
                            `timelineYearButtonStyle
                            ${buttonStatus}
                            ${buttonYearTheme}`
                        }

                        onClick={() => runYearSwitch(time.id)}>
                        {time.year}</button>

                </TimelineContent>
            </TimelineItem>
        );
    });

    return (
        <div>
            {/* Timeline */}
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <Timeline position="left">
                                {listItems}
                            </Timeline>
                        </div>
                        <div className='col-10' >
                            <h4 className='timelineTitleStyle'>{timeline[index].year} | {timeline[index].category} Event</h4>
                            <hr />
                            <div className='container d-flex' style={{ height: '70%' }}>
                                <div className='row mt-5'>
                                    {/* Timeline Description */}
                                    <p
                                        className='col-5 timelineEventStyle align-content-center'>
                                        {timeline[index].event}
                                    </p>
                                    {/* Timeline Picture */}
                                    <img
                                        className='col-7 p-3'
                                        src={`/src/assets/images/${timeline[index].picture}.jpg`}
                                    ></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};