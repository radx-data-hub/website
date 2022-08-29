import PropTypes from "prop-types"
import Markdown from "react-markdown"
import React from "react"
import Image from "next/image"

const EventCard = ({ data }) => {
  return (
    <div className="flex mt-12 mb-12 flex-wrap md:flex-nowrap">
      <div className="md:w-[20%] pr-6 pb-6">
        <Image
          width={"150px"}
          height={"150px"}
          src={data.image}
          alt={"RADx Event Image"}
        />
      </div>
      <div className="md:w-[80%]">
        <h2 className="text-aquaBlue text-2xl font-bold">{data.title}</h2>
        <h3 className="text-base font-bold mb-5">{data.timeAndDate}</h3>
        <Markdown className="text-lg event-card">{data.body}</Markdown>
      </div>
    </div>
  )
}

EventCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    timeAndDate: PropTypes.string,
  }),
}

export default EventCard
