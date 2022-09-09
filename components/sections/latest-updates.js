import PropTypes from "prop-types"
import React from "react"
import Markdown from "react-markdown"

const LatestUpdates = ({ data }) => {
  let { updateInfo } = data

  return (
    <div className="prose-lg container">
      {updateInfo.map((update) => {
        let d = new Date(update.publishedDate)
        return (
          <div key={update.title}>
            <h2>
              <a
                target="_blank"
                href={`/latest-updates/${update.title.replace(/\s/g, "")}`}
                rel="noreferrer"
              >
                {update.title}
              </a>
            </h2>
            <p>
              Published on{" "}
              <span>
                {d.toLocaleString("default", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </span>
            </p>
            <Markdown linkTarget="_blank" className="rich-text-additions">
              {update.body}
            </Markdown>
          </div>
        )
      })}
    </div>
  )
}

LatestUpdates.propTypes = {}

export default LatestUpdates
