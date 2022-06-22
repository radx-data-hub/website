// import PropTypes from "prop-types"
// import Markdown from "react-markdown"
import React from "react"

const Header = ({ data }) => {
  return (
    <div className="container mt-12">
      <h2 className="mb-[8px] text-[#4a66ac] font-bold text-2xl">
        {data.title}
      </h2>
      <hr className="text-orange border-t-[2px] border-orange"></hr>
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
