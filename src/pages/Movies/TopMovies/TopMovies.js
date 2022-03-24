import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TitleCard from "../../../components/Content/components/TitleCard/TitleCard";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";

function TopMovies() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setItems((items) => ({ ...items, ...data })))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, []);

  if (error) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1 className="text-md-center">Top Movies</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center g-3">
          {items.results.map((item, idx) => {
            return (
              <TitleCard
                key={idx}
                id={item.id}
                title={item.title}
                imgUrl={item.poster_path}
                released={item.release_date}
                vote={item.vote_average}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default TopMovies;
