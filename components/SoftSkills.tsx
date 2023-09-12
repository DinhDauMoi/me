"use client";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function SoftSkills() {
  return (
    <div className=" m-8">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />

          <TimelineHeader className="h-3">
            <TimelineIcon />

            <Typography variant="h6" color="blue-gray" className="leading-none">
              SOFT SKILLS
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div>
              <div>• Handling Incidents</div>
              <div>• Teamwork</div>
              <div>• Determination</div>
              <div>• Listening to Feedback</div>
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
