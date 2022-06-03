import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import CustomLink from "./custom-link"

const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "block flex justify-center text-center items-center uppercase font-semibold text-[10px]  border-2 rounded-md",
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
          "bg-radxBlue text-white border-radxBlue py-1 px-2 min-h-[42px] w-40":
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
        }
      )}
    >
      <span>{button.text}</span>
    </div>
  )
}

const ButtonLink = ({ button, appearance, compact = false }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
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
  ]),
  compact: PropTypes.bool,
}

export default ButtonLink
