import React from "react"
import { NihCard } from "../nih-card"
import { ListGroup } from "react-bootstrap"
import CustomLink from "../elements/custom-link"

const TripleCard = ({ data }) => {
  return (
    <div className="prose-lg container mt-6">
      <NihCard title={data.title} style={{ width: "100%" }}>
        <ListGroup horizontal="sm">
          {data.cardLink.map((item, i) => {
            return (
              <>
                <div
                  style={{
                    flex: 1,
                    padding: "0 0.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomLink link={{ url: item.url }}>{item.text}</CustomLink>
                </div>
                {data.cardLink.length - 1 !== i && (
                  <svg width="2" height="60" className="card-divider">
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="60"
                      stroke="#00496e"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </>
            )
          })}
        </ListGroup>
      </NihCard>
    </div>
  )
}

export default TripleCard
