// import PropTypes from "prop-types"
// import Markdown from "react-markdown"
import React from "react"
import EventCard from "../elements/event/event-card"

const Header = ({ data }) => {
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
