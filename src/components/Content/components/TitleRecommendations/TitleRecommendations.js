import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function TitleRecommendations( {dataSource}) {
  return (
    <Row className="mt-3">
      <h5>Similar Titles</h5>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {dataSource.similar.results.map((result, idx) => {
          return (
            <Card
              style={{ minWidth: "20rem" }}
              className="bg-dark mx-2"
              key={idx}
            >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
              />
              <Card.Body className="d-flex justify-content-between">
                <Card.Text>{result.title}</Card.Text>
                <Card.Text>
                  {(result.vote_average * 10).toFixed() + "%"}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Row>
  );
}

export default TitleRecommendations;