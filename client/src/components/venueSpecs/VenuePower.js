import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function VenuePower(data) {
  let venue = data.venue;
  return (
    <Card>
      <ListGroup variant="flush">
        <Card.Header>Power</Card.Header>
        <ListGroup.Item>Stage Left: {venue.stageLeft}</ListGroup.Item>
        <ListGroup.Item>Stage Right: {venue.StageRight}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}