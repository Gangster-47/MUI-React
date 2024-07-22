import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";

function MuiTimeline() {
  return (
  <Timeline>
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">9:30am </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined"/>
        <TimelineConnector/>
      </TimelineSeparator>
      <TimelineContent>
        City A
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">10:30am </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined"/>
        <TimelineConnector/>
      </TimelineSeparator>
      <TimelineContent>
        City B
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">11:30am </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined"/>
      </TimelineSeparator>
      <TimelineContent>
        City C
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  )
}

export default MuiTimeline;
