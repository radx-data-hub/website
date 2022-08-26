import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import CustomLink from "./custom-link"
import Image from "next/image"

const ButtonContent = ({ button, appearance, compact, img }) => {
  return (
    <div
      style={{ zIndex: 1 }}
      className={classNames(
        // Common classes
        "block flex justify-center text-center items-center uppercase font-semibold text-[10px] border-2 rounded-md",
        // Full-size button
        {
          "": compact === false,
        },
        // Compact button
        {
          "px-5 py-2": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "bg-radxBlue text-white border-radxBlue": appearance === "dark",
        },
        // Specific to when the footer button is fully dark
        {
          "bg-radxBlue text-white text-sm border-radxBlue mb-4 sm:mb-0 py-1 px-2 min-h-[42px] w-40":
            appearance === "dark-footer",
        },
        // Specific to when the button is dark outlines
        {
          "text-primary-600 border-primary-600": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "bg-white text-primary-600 border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        },
        // Specific to when the button is for the home page slideshow component
        {
          "text-white text-sm shadow-lg bg-orange h-28 px-6 w-48 rounded-lg border-0 rounded-r-[0]":
            appearance === "slideshow-1",
        },
        // Specific to when the button is for the home page slideshow component
        {
          "text-white text-sm shadow-lg bg-radxBlue h-28 px-4 w-48 rounded-lg border-0 rounded-l-[0]":
            appearance === "slideshow-2",
        }
      )}
    >
      {img ? (
        <div>
          <div className="font-normal text-left text-base">{button.text}</div>
          <Image width="150px" height="33px" src={img} alt={"radx logo"} />
        </div>
      ) : (
        <span>{button.text}</span>
      )}
    </div>
  )
}

const ButtonLink = ({ button, appearance, compact = false, img }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
        img={img}
      />
    </CustomLink>
  )
}

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
    "slideshow",
    "dark-footer",
  ]),
  compact: PropTypes.bool,
}

export default ButtonLink
