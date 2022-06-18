import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import classes from "./CurrentSeason.module.scss";

function CurrentSeason({ dataSource }) {
  const currentSeason = dataSource.seasons[dataSource.seasons.length - 1];
  const currentSeasonNb = currentSeason.season_number;

  // Transform air date format "1980-11-30" into string date to use in component paragraph
  const getSeasonPremiereDate = (airDate) => {
    const [year, month, day] = airDate.split("-");
    const date = new Date(year, month, day);
    const stringDate = date.toDateString().replace(" ", ", ");

    return stringDate;
  };

  return (
    <Container className={classes["current-season"]}>
      <Row className="mt-4 justify-content-center">
        <h5>
          <Link
            to={`season/${currentSeasonNb}`}
            className={classes["more-link"]}
          >
            <span>Current Season</span>
            <i className="bi bi-caret-right-fill ps-2"></i>
          </Link>
        </h5>
      </Row>
      <Row className="bg-dark rounded">
        <Col className="p-0" sm="auto">
          <Link
            to={`season/${currentSeasonNb}`}
            className={classes["more-link"]}
          >
            <Image
              className="rounded-start"
              src={`https://image.tmdb.org/t/p/w200${currentSeason.poster_path}`}
            />
          </Link>
        </Col>
        <Col className="d-flex flex-column justify-content-evenly">
          <div className={classes.title}>
            <h4>
              <Link
                to={`season/${currentSeasonNb}`}
                className={classes["more-link"]}
              >
                <span>{currentSeason.name}</span>
              </Link>
            </h4>
            <div>
              <span>{currentSeason.air_date.split("-").shift()}</span> |{" "}
              <span>{currentSeason.episode_count} Episodes</span>
            </div>
          </div>
          <p className="pt-sm-0">
            Season {currentSeasonNb} of {dataSource.name} premiered on{" "}
            {getSeasonPremiereDate(currentSeason.air_date)}.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CurrentSeason;
