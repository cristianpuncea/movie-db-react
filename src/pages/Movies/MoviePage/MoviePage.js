import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
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
      `https://api.themoviedb.org/3/movie/${id}?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US&append_to_response=videos,images`
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
                    return `${genre.name} `
                  })}
                </ListGroup.Item>
                <ListGroup.Item as="li" className="bg-secondary text-light">
                  {movieDetails.runtime} min
                </ListGroup.Item>
              </ListGroup>
              <ul className={classes["action-btns"]}>
                <li>{movieDetails.vote_average}</li>
                <li><i className="bi bi-heart"></i></li>
                <li><i className="bi bi-bookmark-plus"></i></li>
              </ul>

              <div>
                <h5>Overview</h5>
                <p>{movieDetails.overview}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <div>Card Carousel</div>
          </Row>
          <Row>
            <div>Similar suggestions</div>
          </Row>
        </Container>
      </>
    );
  }
}
