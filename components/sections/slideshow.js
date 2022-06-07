import PropTypes from "prop-types"
import React from "react"
import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import ButtonLink from "../elements/button-link"
import Image from "next/image"

const Slideshow = ({ data }) => {
  return (
    <div className={"slide-container " + "relative"}>
      <Fade arrows={false}>
        {data.pics.map((img, i) => {
          return (
            <div className="each-fade container" key={img + i}>
              <Image
                width="1220px"
                height="460px"
                src={img.img.data.attributes.url}
                alt={"hero image"}
              />
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

Slideshow.propTypes = {
  data: PropTypes.shape({
    pics: PropTypes.array,
  }),
}

export default Slideshow
