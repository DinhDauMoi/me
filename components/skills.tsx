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
                • CSS, bootstrap, tailwindcss, jquery, Javascript to build
                effective front-end.
              </div>
              <div>• I have the ability to program the Odoo interface.</div>
              <div>• Basic React with the Next.js framework.</div>
              <div>• Photoshop.</div>
              <div>• IT helpdesk.</div>
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
