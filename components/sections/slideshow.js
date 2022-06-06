import PropTypes from "prop-types"
import React from "react"
import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import ButtonLink from "../elements/button-link"

const Slideshow = ({ data }) => {
  /* eslint-disable @next/next/no-img-element */
  return (
    <div className={"slide-container " + "relative"}>
      <Fade arrows={false}>
        {fadeImages.map((img, i) => {
          return (
            <div className="each-fade" key={img + i}>
              <div style={{ width: "100%" }} className="tt">
                <img
                  alt="covid picture"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={img.img.data.attributes.url}
                />
              </div>
            </div>
          )
        })}
      </Fade>
      <ButtonLink
        img="https://radx-images.s3.amazonaws.com/RADX_Wordmark_White_15be42991f.svg?updated_at=2022-06-03T18:37:55.198Z"
        appearance="slideshow"
        button={data.btn}
      />
    </div>
  )
}

// Slideshow.propTypes = {
//   data: PropTypes.shape({
//     content: PropTypes.string,
//   }),
// }

export default Slideshow
