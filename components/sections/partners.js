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

const PartnerLogos = ({logos, setTabIndex, tabIndex}) => {
  const [originalHeight, setOriginalHeight] = useState(0)
  const [maxHeight, setMaxHeight] = useState(200)

  useEffect (() => {
    const partnersContainer = document.getElementById("partnersContainer")
    setOriginalHeight(partnersContainer.offsetHeight)
    const currentContent = document.getElementById('content-0')
    // setMaxHeight(partnersContainer.offsetHeight + currentContent.offsetHeight)
    // console.log(originalHeight, "use effect height")
  }, [originalHeight])

  // useEffect (() => {
  //   const partnersContainer = document.getElementById("partnersContainer")
  //   partnersContainer.style.height = `${maxHeight}px`
  // }, [maxHeight])
  
  const onHover = (e) => {
    const id = e.target.id.slice(-1)
    showPartner(id)
    setTabIndex(id)

    const currentContent = document.getElementById(`content-${id}`)
    console.log(currentContent.offsetHeight, "currentContent.offsetHeight")
  
    const currentContentHeight = originalHeight + currentContent.offsetHeight
    console.log("currentContentHeight", currentContentHeight)
    console.log("maxHeight", maxHeight)
    console.log("originalHeight", originalHeight)
    if (currentContentHeight > maxHeight) {
      setMaxHeight(currentContentHeight)
    }
  }

  const onLeave = (e) => {
    const id = e.target.id.slice(-1)


      const currentFocus = document.getElementById(`logo-${id}`)
      currentFocus.removeAttribute("class")
      const currentContent = document.getElementById(`content-${e.target.id.slice(-1)}`)
      currentContent.style.visibility = "hidden"
      // const partnersContainer = document.getElementById("partnersContainer")
      // partnersContainer.style.height = `${originalHeight}px`

  }
    return (
        <div className="container flex items-center justify-between bg-gray-100 h-40 py-0">
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
  console.log("is active?", active, id)
    return (
        <div id={`content-${id}`} 
        className="flex flex-col absolute inset-x-0 top-48 px-8 pb-4 inline-block"
        style={{  visibility: active ? "visible" : "hidden", border: "2px solid red" }}>
            <h2>{title}</h2>
            <div className="text-1xl flex-shrink">{body}</div>
        </div>
    )
}

const Partners = ({ data }) => {

  const [tabIndex, setTabIndex] = useState(0)
  const indexRef = useRef(tabIndex)
  indexRef.current = tabIndex

  useEffect(() => {
    const timer = setInterval(() => setTabIndex((indexRef.current + 1) % 4), 3000)
    // console.log(tabIndex)
    const partnersContainer = document.getElementById("partnersContainer")
    const partnersContainerHeight = document.getElementById("partnersContainer").offsetHeight
    const currentContentHeight = document.getElementById(`content-${tabIndex}`).offsetHeight
    console.log("P:", partnersContainerHeight, "C:", currentContentHeight)
    if (partnersContainerHeight !== 200 + currentContentHeight) {
      partnersContainer.style.height = `${200 + currentContentHeight}px`
    }

    return () => clearInterval(timer)
  }, [tabIndex])

  const partners = data.Content?.map((partner, idx) => {
    return (
        {
            id: idx,
            title: partner.Title,
            body: partner.Body,
            imageURL: partner.image.data.attributes.url
        }
    )
  })

  return (
    <div 
      id="partnersContainer"
      className="sm:prose-md prose-lg container py-8 relative flex flex-col justify-between " 
      style={{ height: "auto", border: "2px solid blue" }}>
        <PartnerLogos logos={ partners.map((partner)=> partner.imageURL) } setTabIndex={setTabIndex} tabIndex={tabIndex} />
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