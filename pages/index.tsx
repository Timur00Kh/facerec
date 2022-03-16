import SSRProvider from "react-bootstrap/SSRProvider";
import { FaceGen } from "../components/FaceGen";
import {
  Button,
  Col,
  Container,
  Modal,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import React, { useState } from "react";

const data = [
  {
    image: "/faces/Slava.png",
    result: "/faces/Slava_black_man.png",
    q: { age: 0, skin: -3, gender: 0, smile: 0 },
  },
  {
    image: "/faces/Slava.png",
    result: "/faces/Slava_black_man_smile.png",
    q: { age: 0, skin: -0.9, gender: 0, smile: 2.7 },
  },
  {
    image: "/faces/Slava.png",
    result: "/faces/Slava_black_woman.png",
    q: { age: 0, skin: -2.4, gender: -2, smile: 0 },
  },
  {
    image: "/faces/Slava.png",
    result: "/faces/Slava_black_woman_smile.png",
    q: { age: 0, skin: -2.4, gender: -2, smile: 2.8 },
  },
  {
    image: "/faces/Slava.png",
    result: "/faces/Slava_smile_and_pretty.png",
    q: { age: -1, skin: 0.4, gender: 0, smile: 0.7 },
  },

  {
    image: "/faces/Zakazchik.png",
    result: "/faces/Zakazchik_black_man.png",
    q: { age: 0, skin: -3, gender: 0, smile: 0 },
  },
  {
    image: "/faces/Zakazchik.png",
    result: "/faces/Zakazchik_black_man_smile.png",
    q: { age: 0, skin: -0.9, gender: 0, smile: 2.7 },
  },
  {
    image: "/faces/Zakazchik.png",
    result: "/faces/Zakazchik_black_woman_smile.png",
    q: { age: 0, skin: -2.4, gender: -2, smile: 2.8 },
  },
];

export default function Home() {
  const [i, setI] = useState(0);
  const current = data[i];
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showLoad, setShowLoad] = useState(false);

  return (
    <SSRProvider>
      <Navbar bg="light">
        <Container>
          <Row style={{ width: "100%" }}>
            <Col xs={"auto"} style={{ marginLeft: "auto" }} className="px-2">
              <Button onClick={() => setShowLoad(true)} variant="success">
                Load Face
              </Button>
            </Col>
            <Col xs={"auto"} className="px-2">
              <Button onClick={() => setShowOffCanvas(true)} variant="warning">
                History
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <FaceGen image={current.image} result={current.result} q={current.q} />
      <Offcanvas show={showOffCanvas} onHide={() => setShowOffCanvas(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>History</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.map((item, index) => (
            <Row
              onClick={() => {
                setI(index);
                setShowOffCanvas(false);
              }}
              className="hover"
            >
              <Col md={6} className="p-5">
                <img src={item.image} alt="photo" />
              </Col>
              <Col md={6} className="p-5">
                <img src={item.result} alt="result" />
              </Col>
            </Row>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
      <Modal show={showLoad} onHide={() => setShowLoad(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Load Face</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="dropdown">
            <div>Drop face image here</div>
          </div>
        </Modal.Body>
      </Modal>
    </SSRProvider>
  );
}
