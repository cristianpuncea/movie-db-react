import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import classes from "./TitleRecommendations.module.scss";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function TitleRecommendations({ dataSource }) {
  return (
    <Row className="mt-4">
      <h5>
        <Link to="similar" className={classes["more-link"]}>
          <span>Similar Titles</span>
          <i className="bi bi-caret-right-fill ps-2"></i>
        </Link>
      </h5>
      <div
        className={`d-flex flex-row flex-nowrap overflow-auto ${classes.container}`}
      >
        {dataSource.similar.results.map((result, idx) => {
          return (
            <Card
              style={{ minWidth: "20rem" }}
              className="bg-dark mx-2"
              key={idx}
            >
              <Link to={`/movies/${result.id}`}>
                {!result.backdrop_path && <div className={classes.backdrop_path_placeholder}></div> }
                  {result.backdrop_path && <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                  className={`${classes["card-img"]}`}
                />}
              </Link>
              <Card.Body className="d-flex justify-content-between align-items-center px-2 py-2">
                <Card.Text className="m-0">
                  <Link
                    className={`${classes["title-link"]}`}
                    to={`/movies/${result.id}`}
                  >
                    {result.title}
                  </Link>
                </Card.Text>
                <Card.Text as="div">
                  <Col
                    xs="auto"
                    className="d-flex flex-column align-items-center"
                  >
                    <div>
                      <i
                        className={`${classes.rating} bi bi-star-half fs-5`}
                      ></i>
                      <span className="fw-bold">
                        {result.vote_average.toFixed(1)}
                      </span>
                      <span className="fw-lighter">/10</span>
                    </div>
                  </Col>
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
