import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

export default function LoadingPage() {
  return (
    <Row className="justify-content-md-center my-5">
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Col md="auto">
        <h2 className="text-secondary">Loading...</h2>
      </Col>
    </Row>
  );
}
