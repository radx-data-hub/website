// import PropTypes from "prop-types"
// import Markdown from "react-markdown"
import React from "react"
import EventCard from "../elements/event/event-card"

const Header = ({ data }) => {
  let dummyData = [
    {
      title: "RADx Data Hub Tour",
      timeAndDate: "Monday, January 23, 2023 1:00-2:00 PM ET",
      body: "The National Institutes of Health (NIH) Rapid Acceleration of Diagnostics Data Hub (RADx® Data Hub) cloud-enabled platform is now open to researchers. [The RADx Data Hub](https://radx-hub.nih.gov/) represents one of the largest collections of NIH COVID data available to researchers that allows researchers to explore, access, and analyze COVID-related data developed through [NIH RADx program initiatives](https://www.nih.gov/research-training/medical-research-initiatives/radx/radx-programs). In December, NIH released two new Notices of Special Interest ([NOT-OD-23-040](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-23-040.html) and [NOT-OD-23-041](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-23-041.html)) that support scientific inquiry using existing data resources in the RADx Data Hub. \n \n On January 23, 2023 from 1:00-2:00 p.m. Eastern Time, researchers are invited to [tour the RADx Data Hub](https://renci.zoom.us/webinar/register/WN_L1FMUEp6QMSjlipjrzCPXg). This tour will feature an overview of the RADx Data Hub program and its portfolio, a demonstration of RADx Data Hub capabilities, and an open question and answer session. The webinar will be recorded and made available to those who register for it.",
      image:
        "https://radx-images.s3.amazonaws.com/Rad_X_Calendar_8be31c46d5.png?updated_at=2022-06-28T17:58:21.536Z",
    },
    {
      title: "RADx (C)DCC Quarterly Meeting",
      timeAndDate: "Thursday, August 25, 2022 2:00-3:00 PM ET",
      body: "The RADx Data Hub Partners and the RADx Coordination and Data Collection Centers meet quarterly to discuss progress and development milestones key to the RADx Data Hub. testing, regulatory affairs, entrepreneurs, and business leaders.",
      image:
        "https://radx-images.s3.amazonaws.com/Rad_X_Event_14_04ed15964d.png",
    },
  ]
  let dummyData2 = [
    {
      title: "RADx (C)DCC Quarterly Meeting",
      timeAndDate: "Thursday, May 26, 2022 2:00-3:00 PM ET",
      body: "The RADx Data Hub Partners (DHP) are working together with the RADx Coordination and Data Collection Centers (C)DCCs to create and implement structures that achieve the RADx Data Hub vision - creating a single access point to de-identified COVID-19 RADx and related research data, algorithms, and other capabilities generated by various digital health solutions and technologies for researchers. This quarterly meeting will offer an opportunity for RADx (C)DCCs to share needs, questions, and concerns about data submission timelines and requirements. The RADx DHP will also provide RADx Data Hub updates, an overview of the development timeline, data submission expectations, and key considerations",
      image:
        "https://radx-images.s3.amazonaws.com/Rad_X_Event_14_04ed15964d.png",
    },
    {
      title: "RADx (C)DCC Kick-off Meeting",
      timeAndDate: "Thursday, February 17, 2022 2:00-3:00 PM ET",
      body: "The purpose of this meeting is to kick off the RADx Data Hub under the direction of a new team, the RADx Data Hub Partners (RADx DHP), allowing this new team and the RADx (C)DCCs to get to know one another and begin building community. This meeting will include formal introductions of the RADx DHP and RADx program (C)DCCs, a RADx program status update from the NIH perspective, and an overview of RADx DHP visions and goals.",
      image:
        "https://radx-images.s3.amazonaws.com/Rad_X_Event_14_04ed15964d.png",
    },
    {
      title: "RADx (C)DCC Quarterly Meeting",
      timeAndDate: "Thursday, August 25, 2022 2:00-3:00 PM ET",
      body: "The RADx Data Hub Partners and the RADx Coordination and Data Collection Centers meet quarterly to discuss progress and development milestones key to the RADx Data Hub. testing, regulatory affairs, entrepreneurs, and business leaders.",
      image:
        "https://radx-images.s3.amazonaws.com/Rad_X_Event_14_04ed15964d.png",
    },
  ]
  return (
    <div className="container mt-12">
      {/* <h2 className="mb-[8px] text-[#4a66ac] font-bold text-2xl">
        {data.title}
      </h2>
      <hr className="text-orange border-t-[2px] border-orange"></hr>
      {data.title === "Upcoming Events"
        ? dummyData.map((event, i) => {
            return <EventCard key={i + event.title} data={event} />
          })
        : dummyData2.map((event, i) => {
            return <EventCard key={i + event.title} data={event} />
          })} */}
    </div>
  )
}

// Header.propTypes = {
//   data: PropTypes.shape({
//     content: PropTypes.string,
//     border: PropTypes.bool,
//   }),
// }

export default Header
