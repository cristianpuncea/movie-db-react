import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import TitlePagination from "../../../components/Content/components/TitlePagination/TitlePagination";
import classes from "./PopularPeople.module.scss";

function PopularPeople() {
  const [peopleList, setPeopleList] = useState(null);
  const { pageID } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US&page=${pageID}`
    )
      .then((res) => res.json())
      .then((data) => setPeopleList(data));
  }, [pageID]);

  return (
    <Row className={`justify-content-center gy-3 ${classes.container} mt-2`}>
      {console.log(peopleList)}
      {peopleList?.results.map((person) => {
        return (
          <Card bg="dark" style={{ width: "14rem" }}>
            <Link to={`/person/${person.id}`}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
              />
            </Link>
            <Card.Body>
              <Link to={`/person/${person.id}`}>
                <Card.Title className={classes.title}>{person.name}</Card.Title>
              </Link>
              <Card.Text className={`${classes.filmography} text-secondary`}>
                {person.known_for?.map((title, idx) => {
                  if (idx < person.known_for.length - 1) {
                    return <>{title.name || title.title}, </>;
                  } else {
                    return <>{title.name || title.title}</>;
                  }
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}

      <TitlePagination
        currentPage={parseInt(pageID)}
        totalPages={
          peopleList?.total_pages <= 500 ? peopleList?.total_pages : 500
        }
        linkedPath="/people/popular"
      />
    </Row>
  );
}

export default PopularPeople;
