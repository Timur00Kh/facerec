import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import InputRange from "react-input-range";

interface Q {
  age: number;
  skin: number;
  gender: number;
  smile: number;
}

interface Props {
  image: string;
  result: string;
  q: Q;
}

export const FaceGen: React.FC<Props> = ({ image, result, q }) => {
  return (
    <Container>
      <Row>
        <Col md={6} className="p-5">
          <img src={image} alt="photo" />
        </Col>
        <Col md={6} className="p-5">
          <img src={result} alt="result" />
        </Col>
      </Row>
      <Row>
        <Col className="p-3">
          <h3>Age</h3>
          <InputRange
            value={q.age}
            minValue={-3}
            maxValue={3}
            step={0.1}
            onChange={() => []}
          />
        </Col>
        <Col className="p-3">
          <h3>Gender</h3>
          <InputRange
            value={q.gender}
            minValue={-3}
            maxValue={3}
            step={0.1}
            onChange={() => []}
          />
        </Col>
      </Row>
      <Row>
        <Col className="p-3">
          <h3>Smile</h3>
          <InputRange
            value={q.smile}
            minValue={-3}
            maxValue={3}
            step={0.1}
            onChange={() => []}
          />
        </Col>
        <Col className="p-3">
          <h3>Skin</h3>
          <InputRange
            value={q.skin}
            minValue={-3}
            maxValue={3}
            step={0.1}
            onChange={() => []}
          />
        </Col>
      </Row>
    </Container>
  );
};
