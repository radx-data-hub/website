import PropTypes from "prop-types"
import React from "react"
import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import ButtonLink from "../elements/button-link"
import Image from "next/image"

const Slideshow = ({ data }) => {
  console.log(data)
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
      <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex btn-group">
        <ButtonLink
          img="https://radx-images.s3.amazonaws.com/RADX_Wordmark_White_15be42991f.svg?updated_at=2022-06-03T18:37:55.198Z"
          appearance="slideshow-1"
          button={data.btn}
        />
        <ButtonLink appearance="slideshow-2" button={data.btn2} />
      </div>
    </div>
  )
}

Slideshow.propTypes = {
  data: PropTypes.shape({
    pics: PropTypes.array,
  }),
}

export default Slideshow
