import PropTypes from "prop-types"
import React from "react"
import Markdown from "react-markdown"

const HomePageUpdates = ({ data }) => {
  let { updateInfo } = data
  console.log(data)
  return (
    <div className="container">
      <div className="border-[2px] border-orange">
        <hr className="text-orange border-t-[2px] border-orange mb-[48px]"></hr>
        {updateInfo.map((update) => {
          let d = new Date(update.publishedDate)
          return (
            <div key={update.title} className="mb-6">
              <h2 className="mb-2 text-2xl font-bold">
                <a
                  target="_blank"
                  href={`/latest-updates/${update.title.replace(/\s/g, "")}`}
                  rel="noreferrer"
                  className="underline text-radxBlue"
                >
                  {update.title}
                </a>
              </h2>
              <p className="mb-4">
                Published on{" "}
                <span>
                  {d.toLocaleString("default", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </p>
              <div className="mb-8 text-lg">
                <a
                  target="_blank"
                  href={`/latest-updates/${update.title.replace(/\s/g, "")}`}
                  rel="noreferrer"
                >
                  <div style={{ height: "120px" }}>
                    <div style={{ height: "91px", overflow: "hidden" }}>
                      <Markdown
                        linkTarget="_blank"
                        className="rich-text-additions"
                      >
                        {`${update.body} ...`}
                      </Markdown>
                    </div>
                    ...
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

HomePageUpdates.propTypes = {}

export default HomePageUpdates
