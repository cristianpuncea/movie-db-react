import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import ErrorPage from "../../../ErrorPage/ErrorPage";
import LoadingPage from "../../../LoadingPage/LoadingPage";
import { Link } from "react-router-dom";
import classes from "./TitleCard.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TitleCard({
  id,
  title,
  imgUrl,
  released,
  vote,
  titleType,
}) {
  const [imgDetails, setImgDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const formatReleaseDate = (strDate) => {
    if (!strDate) {
      return "Unreleased";
    }
    const dateArray = strDate.split("-");
    const date = new Date(...dateArray);
    const formatedDateArray = date.toDateString().split(" ").slice(1);
    const year = formatedDateArray.pop();
    const formatedDate = formatedDateArray.join(" ").concat(", ", year);
    return formatedDate;
  };

  const titleLink =
    titleType === "movie"
      ? `/movies/${id}`
      : titleType === "tv"
      ? `/tv/${id}`
      : null;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=f32f5745a157ac7e0c2013a20219c5e8`
    )
      .then((res) => res.json())
      .then((data) => setImgDetails((img) => ({ ...img, ...data })))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, []);

  if (error) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <Card
        style={{ width: "14rem" }}
        className={`bg-dark mx-2 px-0 ${classes["movie-card"]}`}
        border="warning"
      >
        <Link to={titleLink}>
          <Card.Img
            variant="top"
            src={
              imgDetails.images.secure_base_url +
              imgDetails.images.still_sizes[2] +
              imgUrl
            }
          />
        </Link>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Link to={titleLink} className={classes["title-link"]}>
            <Card.Title
              as="span"
              className={`text-light fs-6 fw-bold ${classes["movie-title"]}`}
            >
              {title}
            </Card.Title>
          </Link>
          <Row className="align-items-center">
            <Card.Text className="text-secondary col m-0">
              {formatReleaseDate(released)}
            </Card.Text>
            <Col xs="auto" className="d-flex flex-column align-items-center">
              <div>
                <i className={`${classes.rating} bi bi-star-half fs-5`}></i>
                <span className="fw-bold">{vote.toFixed(1)}</span>
                <span className="fw-lighter">/10</span>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
