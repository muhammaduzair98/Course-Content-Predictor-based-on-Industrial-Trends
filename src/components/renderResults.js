import React from "react";
import reactDom from "react-dom";
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  ToastHeader,
  ToastBody,
  Toast,
} from "reactstrap";

import { Axios } from "axios";

function RenderResults() {
  return (
    <Container>
      <Row>
        <Col className="bg-light border" xs="4">
          <b>Course Name</b>
          <hr />
          <div style={{ height: "150px" }}>
            <p>Machine leaning</p>
          </div>
          <div style={{ height: "150px" }}>
            <p>Natural Language Processing</p>
          </div>
        </Col>
        <Col className="bg-light border" xs="4">
          <b>Summary</b>
          <hr />
          <div style={{ height: "150px" }}>
            <p>
              Machine learning is the study of computer algorithms that can
              improve automatically through experience and by the use of data.
              It is seen as a part of artificial intelligence...
            </p>
          </div>
          <div style={{ height: "150px" }}>
            <p>
              Natural language processing is a subfield of linguistics, computer
              science, and artificial intelligence concerned with the
              interactions between computers and human language, in particular
              how to program computers to process and analyze large amounts of
              natural language data
            </p>
          </div>
          <br />
        </Col>
        <Col className="bg-light border" xs="4">
          <div>
            <b>Number of Jobs Found</b>
            <hr />
            <p style={{ height: "150px" }}>1040</p>
          </div>
          <div>
            <p style={{ height: "150px" }}>400</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default RenderResults;
