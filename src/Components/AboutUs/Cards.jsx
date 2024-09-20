import React from "react";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card style={{ width: props.width, minHeight: props.minHeight}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p className="title">{props.title}</p>
          <p className="email">{props.email}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
