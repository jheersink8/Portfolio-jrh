import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import timeline from '../../../../assets/JSON/timeline.js';
const listItems = timeline.map(time =>  
  <TimelineItem key={time.id}>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector style={{ display: `${time.lineValue}` }} />
    </TimelineSeparator>
    <TimelineContent style={{}}>{time.year}</TimelineContent>
  </TimelineItem>  
);

export default function TestTimeline() {
  return (
    <div>
      <h3 style={{textAlign:'center'}}>My Timeline</h3>
      <div className='container'>

        <div className='row'>



          <div className='col-3 border'>
            <Timeline position="left">
              {listItems}
            </Timeline>
          </div>

          <div className='col-9 border'>
            <p>CONTENT AND STUFF</p>
          </div>

        </div>
      </div>
    </div>
  );
};