import React from 'react';
import TimelineSection from './TimelineSection';

import educationData from '../aboutData/educationData';
import experienceData from '../aboutData/experienceData';


const Timeline: React.FC = () => {
  return (
    <div>
        <div className="row">
        <TimelineSection title="Education" items={educationData} />
        <TimelineSection title="Experience" items={experienceData} />
        </div>
    </div>
  );
};

export default Timeline
