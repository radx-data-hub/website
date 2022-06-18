import PropTypes from "prop-types"
import Markdown from "react-markdown"
import React, { useState, useEffect, useRef } from "react"

const showPartner = (id) => {
  const currentLogo = document.getElementById(`logo-${id}`)
  currentLogo.setAttribute("class", "border-2")
  // console.log(currentLogo)
  
  const currentContent = document.getElementById(`content-${id}`)
  currentContent.style.visibility = "visible"
} 

const setContainerHeight = (initialHeight = null) => {
  const partnersContainer = document.getElementById("partnersContainer")
  const heights = [...document.querySelectorAll(".partners")]
  const maxSelectorHeight = Math.max.apply(null, heights.map((selector) => 
  {
      return selector.offsetHeight;
  }));
  // console.log(maxSelectorHeight, "max")
  // console.log((initialHeight || partnersContainer.offsetHeight) + maxSelectorHeight)
  partnersContainer.style.height = `${(initialHeight || partnersContainer.offsetHeight) + maxSelectorHeight}px`
}

const PartnerLogos = ({logos, setTabIndex, tabIndex, indexRef}) => {
  
  const onHover = (e) => {
    const id = e.target.id.slice(-1)
    showPartner(id)
    setTabIndex(id)

    const currentContent = document.getElementById(`content-${id}`)
  }

  const onLeave = (e) => {
    const id = e.target.id.slice(-1)

    const currentFocus = document.getElementById(`logo-${id}`)
    currentFocus.removeAttribute("class")
    const currentContent = document.getElementById(`content-${e.target.id.slice(-1)}`)
    currentContent.style.visibility = "hidden"

    setTabIndex((indexRef.current) % 4)
  }

  return (
      <div className="container flex items-center justify-between bg-gray-100 h-40">
          {logos && logos.map((logo, idx) => {
            return (
            <div 
              key={idx} 
              className="grow object-scale-down flex items-center" 
              style={{ width: "100px", height: "100px"}} 
            >
              <img 
                onMouseEnter={(e) => onHover(e)} 
                onMouseOut={(e) => onLeave(e)}
                style={{ width: "100%", height: "100%", border: idx === tabIndex ? "solid 2px" : "" }} 
                key={idx} 
                id={`logo-${idx}`}
                className="partnerLogos grow"
                src={logo} 
                />
            </div>
            )
          })}
      </div>
  )
}

const PartnerContent = ({id, title, body, active}) => {
    return (
        <div id={`content-${id}`} 
        className="flex flex-col absolute inset-x-0 top-40 px-8 inline-block partners"
        style={{  visibility: active ? "visible" : "hidden" }}>
            <h2>{title}</h2>
            <div className="text-1xl flex-shrink">{body}</div>
        </div>
    )
}

const Partners = ({ data }) => {  
  const [windowWidth, setWindowWidth] = useState(0)
  const [tabIndex, setTabIndex] = useState(0)
  const indexRef = useRef(tabIndex)
  indexRef.current = tabIndex

  useEffect(() => {
    setTimeout(() => setWindowWidth(window.innerWidth), 3000)
  }, [])

  useEffect(() => {
      setContainerHeight(150)
  }, [windowWidth])

  useEffect(() => {
    const timer = setInterval(() => setTabIndex((indexRef.current + 1) % 4), 3000)

    if (windowWidth !== window.innerWidth) {
      setWindowWidth(window.innerWidth)
    }
    return () => clearInterval(timer)
  }, [tabIndex])

  const partners = data.Content?.map((partner, idx) => {
    return (
        {
            id: idx,
            title: partner.Title,
            body: partner.Body,
            imageURL: partner?.image?.data?.attributes?.url
        }
    )
  })

  return (
    <div 
      id="partnersContainer"
      className="sm:prose-md prose-lg container mb-12 relative flex flex-col justify-between " 
      style={{ height: "auto" }}>

        <PartnerLogos logos={ partners.map((partner)=> partner.imageURL) } setTabIndex={setTabIndex} tabIndex={tabIndex} indexRef={indexRef} />

        {partners && partners.map(({ id, title, body })=> {
            return (
                <PartnerContent key={id} id={id} title={title} body={body} active={ id === tabIndex } />
            )
        })}
        {/* <div style={{ clear: "both", lineHeight: "0", height: "0", fontSize: "0em" }}></div> */}
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