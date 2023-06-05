import React from "react";
import { NihCard } from "../nih-card";
import { ListGroup } from "react-bootstrap";
import CustomLink from "../elements/custom-link";

const TripleCard = ({ data }) => {
  return (
    <div className="prose-lg container mt-6">
      <NihCard title="Getting Started" style={{ width: "100%" }}>
        <ListGroup horizontal>
          <div
            style={{
              flex: 1,
              padding: "0 0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomLink link={{ url: "/explore" }}>
              Explore RADx Data
            </CustomLink>
          </div>
          <svg width="2" height="60">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="60"
              stroke="#00496e"
              strokeWidth="2"
            />
          </svg>
          <div
            style={{
              flex: 1,
              padding: "0 0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomLink link={{ url: "/launch" }}>
              Launch the RADx Data Hub
            </CustomLink>
          </div>
          <svg width="2" height="60">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="60"
              stroke="#00496e"
              strokeWidth="2"
            />
          </svg>
          <div
            style={{
              flex: 1,
              padding: "0 0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomLink link={{ url: "/docs" }}>
              Read the Documentation
            </CustomLink>
          </div>
        </ListGroup>
      </NihCard>
    </div>
  );
};

export default TripleCard;
