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

export function Skills() {
  return (
    <div className=" m-8">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />

          <TimelineHeader className="h-3">
            <TimelineIcon />

            <Typography variant="h6" color="blue-gray" className="leading-none">
              PROGRAMMING LANGUAGES
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div>
              <div>• Programming PHP language with Laravel framework</div>
              <div>
                • Programming the Dart language with the Flutter framework
              </div>
              <div>• Works well with C++</div>
              <div>
                • Basic understanding of CSS and bootstrap to build effective
                front-end.
              </div>
              <div>
                • Basic understanding of Javascript for back-end and front-end
                programming.
              </div>
              <div>• I have the ability to program the Odoo interface.</div>
            </div>
          </TimelineBody>

          <TimelineHeader className="h-3">
            <TimelineIcon />

            <Typography variant="h6" color="blue-gray" className="leading-none">
              DATABASES, TOOLKIT
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div>
              <div>• MySQL and SQL Server.</div>
              <div>• Works well with Git/Github.</div>
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
