import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";
import classes from "./MoviePage.module.scss";

export default function MoviePage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgDetails, setImgDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US&append_to_response=videos,images,credits,similar`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails((details) => ({ ...details, ...data })))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, []);

  if (error) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <>
        {console.log({ movieDetails })}
        <Container className="my-5">
          <Row className="bg-dark">
            <Col md="auto">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              />
            </Col>
            <Col>
              <h2>{movieDetails.title}</h2>
              <ListGroup horizontal as="ul">
                <ListGroup.Item as="li" className="bg-secondary text-light">
                  {movieDetails.release_date}
                </ListGroup.Item>
                <ListGroup.Item as="li" className="bg-secondary text-light">
                  {movieDetails.genres.map((genre, idx) => {
                    return `${genre.name} `;
                  })}
                </ListGroup.Item>
                <ListGroup.Item as="li" className="bg-secondary text-light">
                  {movieDetails.runtime} min
                </ListGroup.Item>
              </ListGroup>
              <ul className={classes["action-btns"]}>
                <li>{movieDetails.vote_average}</li>
                <li>
                  <i className="bi bi-heart"></i>
                </li>
                <li>
                  <i className="bi bi-bookmark-plus"></i>
                </li>
              </ul>

              <div>
                <h5>Overview</h5>
                <p>{movieDetails.overview}</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <h5>Main Cast</h5>
            <div className="d-flex flex-row flex-nowrap overflow-auto">
              {movieDetails.credits.cast.map((actor, idx) => {
                return (
                  <Card
                    style={{ minWidth: "10rem" }}
                    className="bg-secondary mx-2"
                    key={idx}
                  >
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{actor.name}</Card.Title>
                      <Card.Text>{actor.character}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Row>
          <Row className="mt-3">
            <h5>Similar Titles</h5>
            <div className="d-flex flex-row flex-nowrap overflow-auto">
              {movieDetails.similar.results.map((result, idx) => {
                return (
                  <Card
                    style={{ minWidth: "20rem" }}
                    className="bg-dark mx-2"
                    key={idx}
                  >
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w300${result.backdrop_path}`}
                    />
                    <Card.Body className="d-flex justify-content-between">
                      <Card.Text>{result.title}</Card.Text>
                      <Card.Text>{(result.vote_average*10).toFixed()+"%"}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
