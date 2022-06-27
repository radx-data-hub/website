import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import Markdown from "react-markdown"

// DISPLAY PARTNER LOGOS VIA CAROUSEL ANIMATION

const ANIMATION_TIMER = 6000
const HIGHLIGHT_TEXT_COLOR = "rgb(90, 162, 172)"

// NOT CURRENTLY USED
/* FADE OUT EFFECT FOR CONTENT
 * target - target element
 * speed - how fast should the content fade out? set to 200 by default.
 */
const fadeOutEffect = (target, speed = 450) => {
  var fadeTarget = document.getElementById(target)
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.2
    } else {
      clearInterval(fadeEffect)
    }
  }, speed)
}

/* FADE IN EFFECT FOR CONTENT
 * target - target element
 * speed - how fast should the content fade in? set to 200 by default.
 */
const fadeInEffect = (target, speed = 200) => {
  var fadeTarget = document.getElementById(target)
  var fadeEffect = setInterval(function () {
    if (fadeTarget.style.opacity <= 1) {
      fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.08
    } else {
      clearInterval(fadeEffect)
    }
  }, speed)
}

/* RESETS THE TRANSFORM ON THE CURRENT AND PREVIOUS PARTNER LOGO IN ANIMATION
 * id - Index of partner in Partners array
 * numOfPartners - total number of partners
 */
const resetPartnerLogoTransform = (id, numOfPartners) => {
  const currentLogo = document.getElementById(`logo-${id}`)
  currentLogo.style.transform = ""
  // currentLogo.style.borderBottom = `2px solid ${HIGHLIGHT_TEXT_COLOR}`
  // currentLogo.style.backgroundColor = "rgb(90, 162, 172, 0.2)"

  const previousLogo = document.getElementById(
    `logo-${id - 1 === -1 ? numOfPartners - 1 : (id - 1) % numOfPartners}`
  )
  previousLogo.style.transform = ""
}

/* PARTNER LOGOS COMPONENT
 *  Displays all partner logos within a container
 *  onHover of logo - the animation is paused and content for selected partner will remain visible
 *  onLeave of logo - animation is resumed
 */
const PartnerLogos = ({
  logos,
  setTabIndex,
  indexRef,
  setAnimate,
  partners,
  setCurrentPartner,
  numOfPartners,
}) => {
  const onHover = (e) => {
    setAnimate(false)
    const partnerContent = document.getElementById("partnerContent")
    partnerContent.style.opacity = 0.5
    fadeInEffect("partnerContent", 50)

    const id = e.target.id.slice(-1)
    setTabIndex(id)
    resetPartnerLogoTransform(id, numOfPartners)
    setCurrentPartner(partners[id])
  }

  const onLeave = (e) => {
    const id = e.target.id.slice(-1)

    const currentFocus = document.getElementById(`logo-${id}`)
    currentFocus.removeAttribute("class")
    // currentFocus.style.borderBottom = ""
    // currentFocus.style.backgroundColor = ""

    setAnimate(true)
    setTabIndex(
      (id === indexRef.current ? indexRef.current : indexRef.current + 1) %
        numOfPartners
    )
  }

  return (
    <div
      id="partnerLogosContainer"
      // justify-around
      className="container flex items-center place-content-evenly flex-wrap bg-gray-100 h-auto"
      style={{ minHeight: "120px" }}
    >
      {logos &&
        logos.map((logo, idx) => {
          return (
            <div
              key={idx}
              className="grow object-scale-down flex items-center"
              style={{ height: "130px", margin: "0px 10px" }}
            >
              {/* eslint-disable @next/next/no-img-element */}
              <img
                onMouseEnter={(e) => onHover(e)}
                onMouseOut={(e) => onLeave(e)}
                style={{ width: "100%", height: "100%" }}
                key={idx}
                id={`logo-${idx}`}
                className="partnerLogos grow"
                src={logo}
                alt=""
              />
            </div>
          )
        })}
    </div>
  )
}

/* PARTNER CONTENT COMPONENT
 *  Displays individual parenter content based on current logo selected
 *  {currentPartner} - object managed by state in Partner Container that holds current partner
 *     title - Title of Partner
 *     body - Partner description
 */
const PartnerContent = (params) => {
  const { title, body } = params.currentPartner

  return (
    <div id={"partnerContent"} className="flex flex-col partners px-8 pt-8">
      <h2 style={{ color: HIGHLIGHT_TEXT_COLOR, margin: "0" }}>{title}</h2>
      <Markdown className="text-1xl flex-shrink">{body}</Markdown>
    </div>
  )
}

/* PARTNERS MAIN COMPONENT
 *  Container that holds Partner Logos and Partner Content components.
 *  Determines the total NUMBER_OF_PARTNERS
 *  Creates Partners array
 *  Manages state
 *  Controls animation of Partner Logos and Partner Content components
 */
const Partners = ({ data }) => {
  const NUMBER_OF_PARTNERS = data.Content?.length || 0
  const partners = data.Content?.map((partner, idx) => {
    return {
      id: idx,
      title: partner.Title,
      body: partner.Body,
      imageURL: partner?.image?.data?.attributes?.url,
    }
  })

  const [animate, setAnimate] = useState(true)
  const [currentPartner, setCurrentPartner] = useState({})
  const [tabIndex, setTabIndex] = useState(NUMBER_OF_PARTNERS)
  const indexRef = useRef(tabIndex)
  indexRef.current = tabIndex

  useEffect(() => {
    setCurrentPartner(partners[0])
    fadeInEffect("partnerContent", 50)

    const currentLogo = document.getElementById("logo-0")
    currentLogo.style.transform = "scale(1.2)"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (animate) {
        const partnerContent = document.getElementById("partnerContent")
        partnerContent.style.opacity = 0.2
        fadeInEffect("partnerContent", 100)

        const previousLogo = document.getElementById(
          `logo-${indexRef.current % NUMBER_OF_PARTNERS}`
        )
        previousLogo.style.transform = ""

        const tab = (indexRef.current + 1) % NUMBER_OF_PARTNERS
        setTabIndex(tab)
        setCurrentPartner(partners[tab])

        const currentLogo = document.getElementById(`logo-${tab}`)
        currentLogo.style.transition = "all 1.25s"
        currentLogo.style.transform = "scale(1.2)"
      }
    }, ANIMATION_TIMER)

    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabIndex])

  useEffect(() => {
    if (!animate) {
      resetPartnerLogoTransform(indexRef.current, NUMBER_OF_PARTNERS)
    }
  }, [animate, NUMBER_OF_PARTNERS])

  return (
    <div
      id="partnersContainer"
      className="container sm:prose-md prose-lg flex flex-col mb-4"
    >
      <PartnerLogos
        logos={partners.map((partner) => partner.imageURL)}
        setTabIndex={setTabIndex}
        tabIndex={tabIndex}
        indexRef={indexRef}
        setAnimate={setAnimate}
        partners={partners}
        setCurrentPartner={setCurrentPartner}
        numOfPartners={NUMBER_OF_PARTNERS}
      />

      <PartnerContent currentPartner={currentPartner} />
    </div>
  )
}

Partners.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    border: PropTypes.bool,
  }),
}

export default Partners
