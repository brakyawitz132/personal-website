import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Norfolk Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Norfolk, VA
          </h4>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Virginia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Charlottesville, VA
          </h4>

          <p><b>Bachelor of the Arts Degree: </b>Statistics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - Aug 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Eichner Photography Studio
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Charlottesville, VA
          </h4>
          <p>SEO/Data Analytic Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2022 - Jun 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kung Fu Tea
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Charlottesville, VA
          </h4>
          <p>Barista</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Flatiron School of Software Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>Developed the backend infrastructure for 2 projects.</p>
          <p>Developed the frontend infrastructure for 4 projects.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;