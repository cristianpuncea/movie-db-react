import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TitleCard from "../../../components/Content/components/TitleCard/TitleCard";
import TitlePagination from "../../../components/Content/components/TitlePagination/TitlePagination";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";

function GetTitles({ fetchPath, linkPath, pageTitle, titleType }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { pageID } = useParams();

  useEffect(() => {
    fetch(`${fetchPath}&page=${pageID}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, [fetchPath, pageID]);

  if (error) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h1 className="text-center">{pageTitle}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center g-3">
          {items.results.map((item, idx) => {
            return (
              <TitleCard
                key={idx}
                id={item.id}
                title={
                  titleType === "movie"
                    ? item.title
                    : titleType === "tv"
                    ? item.name
                    : null
                }
                imgUrl={item.poster_path}
                released={
                  titleType === "movie"
                    ? item.release_date
                    : titleType === "tv"
                    ? item.first_air_date
                    : null
                }
                vote={item.vote_average}
                titleType={titleType}
              />
            );
          })}
        </Row>
        <TitlePagination
          currentPage={parseInt(pageID)}
          totalPages={items.total_pages <= 500 ? items.total_pages : 500}
          linkedPath={linkPath}
        />
      </Container>
    );
  }
}

export default GetTitles;
