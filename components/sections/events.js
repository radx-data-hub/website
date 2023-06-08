// import PropTypes from "prop-types"
// import Markdown from "react-markdown"
import EventCard from "../elements/event/event-card"
import React, { useState, useEffect } from "react"

const Events = ({ data }) => {
  const [upcoming, setUpcomingEvents] = useState([])
  const [past, setPastEvents] = useState([])

  useEffect(() => {
    const upcomingEvents = data.eventData.filter(
      (event) => new Date(event.timeAndDate) > new Date()
    )
    const pastEvents = data.eventData.filter(
      (event) => new Date(event.timeAndDate) < new Date()
    )
    setUpcomingEvents(
      upcomingEvents.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.timeAndDate) - new Date(a.timeAndDate)
      })
    )
    setPastEvents(
      pastEvents.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.timeAndDate) - new Date(a.timeAndDate)
      })
    )
  }, [data.eventData])

  return (
    <div className="container mt-[48px]">
      {upcoming.length !== 0 && (
        <>
          <h2 className="mb-[8px] text-[#4a66ac] font-bold text-2xl">
            {"Upcoming Events"}
          </h2>
          <hr className="text-orange border-t-[2px] border-orange"></hr>
          {upcoming.map((event, i) => {
            return <EventCard key={i + event.title} data={event} />
          })}
          <br></br>
        </>
      )}

      <h2 className="mb-[8px] text-[#4a66ac] font-bold text-2xl">
        {"Past Events"}
      </h2>
      <hr className="text-orange border-t-[2px] border-orange"></hr>
      {past.map((event, i) => {
        return <EventCard key={i + event.title} data={event} />
      })}
    </div>
  )
}

// Header.propTypes = {
//   data: PropTypes.shape({
//     content: PropTypes.string,
//     border: PropTypes.bool,
//   }),
// }

export default Events
