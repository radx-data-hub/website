import React, { useState, useEffect } from "react"
import { styled } from "@mui/material/styles"
import AddIcon from "@mui/icons-material/Add"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Markdown from "react-markdown"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "1.4rem", color: "rgb(56, 121, 130)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: ".6rem 2rem",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

export default function Faqs(props) {
  const [faqs, setFaqs] = useState([])
  const [expanded, setExpanded] = useState()

  useEffect(() => {
    let ifError
    let ifError2
    async function getFaqs() {
      const res = await fetch("https://18.234.99.120:1337/api/faqs?populate=*")
      const faqsData = await res.json()

      return faqsData
    }

    getFaqs()
      .then((faqs) => {
        return groupByTag(faqs.data, "tag")
      })
      .then((res) => {
        const newState = separateObject(res)
        setFaqs(newState)
      })
      .catch((err) => {
        console.log(err)
        ifError = groupByTag(props.pageContext.faqs.data, "tag")
        ifError2 = separateObject(ifError)
        setFaqs(ifError2)
      })
  }, [props.pageContext.faqs])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  // Split the array into separate objects by the tag property
  function groupByTag(arr, property) {
    return arr.reduce(function (memo, x) {
      if (!memo[x.attributes.faqs[property]]) {
        memo[x.attributes.faqs[property]] = []
      }
      memo[x.attributes.faqs[property]].push(x)
      return memo
    }, {})
  }

  // Split the object into an array with an object for each tag with the associated faqs to that tag
  const separateObject = (obj) => {
    const res = []
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      res.push({
        key: key,
        data: obj[key],
      })
    })
    return res
  }

  return (
    <div className="container mt-12 mb-6 ">
      <h2 className="mb-[8px] text-[#4a66ac] font-bold text-3xl">FAQs</h2>
      <hr className="text-orange border-t-[2px] border-orange mb-12"></hr>
      {faqs.map((faq, i) => {
        return (
          <div
            key={i + "obj"}
            style={{
              marginBottom: "15px",
              background: "#fff",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "1.6rem",
                backgroundColor: "rgb(56, 121, 130)",
                color: "white",
                padding: "0.5rem 0",
              }}
            >
              <h2 style={{ fontWeight: "500" }}>
                {faq.key !== "null" ? faq.key : "FAQs"}
              </h2>
            </div>
            {faq.data.map((question, i) => {
              return (
                <Accordion
                  expanded={
                    expanded === "panel" + i + question.attributes.faqs.question
                  }
                  onChange={handleChange(
                    "panel" + i + question.attributes.faqs.question
                  )}
                  style={{
                    // marginBottom: "2px",
                    fontSize: "1.2rem",
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                    borderBottom: "1px solid rgb(56, 121, 130)",
                  }}
                  key={question.attributes.faqs.question + i}
                >
                  <AccordionSummary
                    style={{
                      padding: "0",
                    }}
                    aria-controls={
                      "panel" + i + question.attributes.faqs.question
                    }
                    id={"panel" + i + question.attributes.faqs.question}
                  >
                    <div>{question.attributes.faqs.question}</div>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundColor: "#fff" }}>
                    <span
                      style={{
                        fontSize: "1.1rem",
                      }}
                    >
                      <Markdown
                        linkTarget="_blank"
                        className="rich-text-additions"
                      >
                        {question.attributes.faqs.answer}
                      </Markdown>
                    </span>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
