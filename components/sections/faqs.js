import React, { useState, useEffect } from "react"
import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import Markdown from "react-markdown"
import { getStrapiApiPageData } from "utils/api"

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
        sx={{ fontSize: "2rem", paddingLeft: "10px" }}
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
  padding: "3rem 2.6rem",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

export default function Faqs({ data }) {
  const [faqs, setFaqs] = useState([])
  const [expanded, setExpanded] = useState()

  useEffect(() => {

    async function getFaqs() {
        const res = await fetch("http://18.234.99.120:1337/api/faqs?populate=*");
        const faqsData = await res.json()
        return faqsData;
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

    getFaqs().then(faqs => {
        console.log(faqs.data)
        return groupByTag(faqs.data, "tag")
      }).then((res)=>{
        console.log(res)
      });

    // getStrapiApiPageData("resources/faqs")
    //   .then((res) => {
    //     // console.log(res)
    //     return groupByTag(res.contentSections[2].question, "tag")
    //   })
    //   .then((res) => {
    //     const newState = separateObject(res)
    //     setFaqs(newState)
    //   })
  }, [])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className="container">
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
                fontSize: "1.8rem",
                backgroundColor: "#532565",
                color: "white",
                padding: "0.9rem 0",
              }}
            >
              <h1 style={{ fontWeight: "300" }}>
                {faq.key !== "null" ? faq.key : "FAQs"}
              </h1>
            </div>
            {faq.data.map((question, i) => {
              return (
                <Accordion
                  expanded={expanded === "panel" + i + question.question}
                  onChange={handleChange("panel" + i + question.question)}
                  style={{ backgroundColor: "#e5e0e7" }}
                  key={question.question + i}
                >
                  <AccordionSummary
                    aria-controls={"panel" + i + question.question}
                    id={"panel" + i + question.question}
                  >
                    <Typography>{question.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundColor: "#fff" }}>
                    <Typography component={"span"}>
                      <Markdown className="faq-markdown">
                        {question.answerFAQ}
                      </Markdown>
                    </Typography>
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
