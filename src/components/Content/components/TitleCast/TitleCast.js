import Row from "react-bootstrap/Row";
import peoplePlaceholderImg from "../../../../assets/people-placeholder.png";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import classes from "./TitleCast.module.scss";
import { Link } from "react-router-dom";

function TitleCast({ dataSource }) {
  let imgSrc = "";
  const fullCastList = dataSource.credits.cast;
  const reducedCastList = fullCastList.slice(0, 9);

  return (
    <Row className="gy-3 gx-3 mt-2">
      <h5>
        <Link to="top-cast" className={classes["more-link"]}>
          <span>Top Cast</span>
          <i className="bi bi-caret-right-fill ps-2"></i>
        </Link>
      </h5>{" "}
      {reducedCastList.map((actor, idx) => {
        if (!actor.profile_path) {
          imgSrc = peoplePlaceholderImg;
        } else {
          imgSrc = `https://image.tmdb.org/t/p/w300${actor.profile_path}`;
        }
        return (
          <Col key={idx} md={6}>
            <div className="bg-dark d-flex flex-row justify-content-start rounded ps-lg-5 py-2 ps-md-2 ps-4">
              <Link to={`/actors/${actor.id}`} className={classes["cast-link"]}>
                <Image
                  roundedCircle
                  src={imgSrc}
                  alt="actor"
                  className={`${classes.image}`}
                />
              </Link>
              <div className="align-self-center ms-4">
                <Link
                  to={`/actors/${actor.id}`}
                  className={classes["cast-link"]}
                >
                  <h5>{actor.name}</h5>
                </Link>
                <p>as</p>
                <p>{actor.character}</p>
              </div>
            </div>
          </Col>
        );
      })}
      <Col md={6} className="d-flex">
        <div className={`bg-dark d-flex flex-row justify-content-center rounded w-100 ${classes["more-card"]}`}>
          <div className="align-self-center pt-3">
            <p className="fs-5">
              <Link to="top-cast" className={classes["more-link"]}>
                <span>All Cast & Crew</span>
                <i className="bi bi-arrow-right-square-fill ps-4"></i>
              </Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default TitleCast;
