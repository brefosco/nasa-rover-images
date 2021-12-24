import React, { useState } from "react";
import Picture, { IPictureProps } from "./Picture";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

interface IProps {
  pictures: any; // TODO: add type here
}

const PictureList = (props: IProps) => {
  const { pictures } = props;

  return (
    <Container>
      <Row>
        <div style={{ textAlign: "center" }}>
          {pictures.length > 0 ? (
            pictures.map((picture: any, key: number) => (
              <div key={key}>
                <Picture picture={picture} />
              </div>
            ))
          ) : (
            <p>No pictures here</p>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default PictureList;
