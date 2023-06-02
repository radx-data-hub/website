import { Fragment } from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import classes from './nih-card.module.css'

export const NihCard = ({
  title,
  titleIcon,
  titleUrl,
  children,
  seamlessHeader,
  style,
}) => {
  return (
    <BootstrapCard className={classes.card} style={ style }>
      <BootstrapCard.Title
        className={
          `${ classes.cardTitle } ${ !seamlessHeader && classes.blue }`
        }
        as={titleUrl ? "a" : "DivStyledAsH5"}
        href={titleUrl}
      >
        {titleIcon}
        {title}
      </BootstrapCard.Title>
      <BootstrapCard.Body className={classes.cardBody}>
        {typeof children === "string" ? (
          <BootstrapCard.Text>{children}</BootstrapCard.Text>
        ) : (
          children
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}
