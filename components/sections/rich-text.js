import PropTypes from "prop-types"
import Markdown from "react-markdown"
import React from "react"

const RichText = ({ data }) => {
  return (
    <div className="prose-lg container mt-6">
      <Markdown linkTarget="_blank" className="rich-text-additions">{data.content}</Markdown>
      {data.border && <hr className="border-orange border-[1.4px]" />}
    </div>
  )
}

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    border: PropTypes.bool,
  }),
}

export default RichText
