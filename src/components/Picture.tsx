import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export interface IPictureProps {
  picture: {
    id: number;
    earth_date?: string;
    img_src: string;
    camera: { id: number; name: string; rover_id: number; full_name: string };
    sol?: number;
    rover: {
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
    };
  };
}

const Picture = (props: IPictureProps) => {
  const { picture } = props;
  return (
    <Row>
      <Card className="m-2 picture">
        <Card.Img variant="top" src={picture.img_src} />
        <Card.Body>
          <Card.Title>{picture.rover.name}</Card.Title>
          <Card.Text>{picture.camera.name}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Picture;
