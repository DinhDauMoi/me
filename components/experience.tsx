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

export function DefaultTimeline() {
  return (
    <div className="m-8">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              2/2023 - 7/2023
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <div>
              T4TEK COMPANY LIMITED
              <p style={{ color: "gray" }}>Front-end developer</p>
              <p>• My main job is designing and building websites.</p>
              <p>• Server management.</p>
              <p>• Execute specialized tasks according to the assigned plan.</p>
              <p>
                • Receive training and conduct research in the relevant field.
              </p>
              <p>• Participate in training courses and seminars as guided. </p>
              <p>
                • Create documentation, slides, and present the work undertaken
                and research findings. Create documentation, slides, and present
                the work undertaken and research findings.
              </p>
              <p>
                • Proactively report on work progress according to the
                established plan.
              </p>
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
