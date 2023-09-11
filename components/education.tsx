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

export function DefaultTime() {
  return (
    <div className="w-[32rem] m-8">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              2020 - 2023
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div>
              CAO THANG TECHNICAL COLLEGE
              <p style={{ color: "gray" }}>GPA: 7.41/10</p>
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
