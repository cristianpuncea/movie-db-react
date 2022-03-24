import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function ErrorPage() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center my-5" >
        <Col md="auto" className="bg-secondary text-warning">
          <h2>Couldn't Load Data...</h2>
          <p>It seems we ran into a problem and could not get the data you asked for... You may try on of the following:</p>
            <ul>
              <li>Refresh the page and see if data is loading.</li>
              <li>Use the search bar to find what you're looking for.</li>
            </ul>
          
          </Col>
      </Row>
    </Container>
  );
}
