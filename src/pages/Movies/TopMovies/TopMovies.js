import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TitleCard from "../../../components/Content/components/TitleCard/TitleCard";
import TitlePagination from "../../../components/Content/components/TitlePagination/TitlePagination";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";

function TopMovies() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { topMoviesPageId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US&page=${topMoviesPageId}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, [topMoviesPageId]);

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
          {console.log(items)}
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
        <TitlePagination currentPage={parseInt(topMoviesPageId)} totalPages={items.total_pages}/>
      </Container>
    );
  }
}

export default TopMovies;
