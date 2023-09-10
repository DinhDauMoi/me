import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
 
export function Myproject() {
  return (
    <div className="w-[32rem] m-8">
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
                          <p style={{ "color": "gray" }}>Front-end developer</p>
                          <p>• My main job is designing and building websites</p>
                          <p>• Server management</p>
            </div>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}