import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";
import classes from "./ByGenreTV.module.scss";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ByGenreTV() {
  const [genreList, setGenreList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        const localGenreList = [];
        const titleIdArray = [];

        data.genres.forEach((genre) => {
          fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre.id}`
          )
            .then((res) => res.json())
            .then((titles) => {
              const localGenreObj = { ...genre };

              for (const result of titles.results) {
                if (!titleIdArray.includes(result.id)) {
                  titleIdArray.push(result.id);
                  localGenreObj.movieID = result.id;
                  localGenreObj.backdropImg = result.backdrop_path;
                  break;
                }
              }
              localGenreList.push(localGenreObj);
              setGenreList((prev) => [...prev, localGenreObj]);
            })
            .catch((err) => {
              console.error(err);
              setError(true);
            });
        });
      });

    return <div></div>;
  }, []);

  return (
    <>
      {error && <ErrorPage />}
      <h2 className="text-center">TV Shows by Genre</h2>
      <Container>
        <Row className="g-3 justify-content-xl-start justify-content-center">
          {genreList.map((genre) => {
            const genreNameLink =
              genre.id + "-" + genre.name.split(" ").join("-").toLowerCase();
            return (
              <Col
                key={`${genre.id}${Math.random()}`}
                className={`${classes["img-container"]} flex-grow-0`}
              >
                {!genre && <LoadingPage />}
                <Link to={genreNameLink}>
                  <div className="d-flex justify-content-center">
                    <h4 className="align-self-center">{genre.name}</h4>
                    {!genre.backdropImg && (
                      <div className={classes["img-placeholder"]}></div>
                    )}

                    {genre.backdropImg && (
                      <img
                        src={`https://image.tmdb.org/t/p/w300${genre.backdropImg}`}
                        alt="movie"
                      />
                    )}
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ByGenreTV;
