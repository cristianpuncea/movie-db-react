import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import classes from "./TitlePageHeader.module.scss";
import popularityIcon from "../../../../assets/popularity-icon.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TitlePageHeader({ dataSource }) {
  const certification = dataSource.release_dates.results.reduce(function (
    prev,
    curr
  ) {
    if (prev.iso_3166_1 === "US" && prev.release_dates[0].certification) {
      return prev;
    }else if (curr.iso_3166_1 === "US" && curr.release_dates[0].certification) {
      return curr;
    } else if (curr.release_dates[0].certification) {
      return curr;
    } else {
      return prev;
    }
  },
  {}).release_dates[0].certification;

  const minToHrs = (mins) => {
    const hours = mins / 60;
    const minutes = mins % 60;
    return `${hours.toFixed()}h ${minutes}m`;
  };

  // Define writers list and their contribution
  const writers = {};
  const data = dataSource.credits.crew.filter(
    (el) => el.department === "Writing"
  );
  data.forEach((writer) => {
    if (!writers[writer.name]) {
      writers[writer.name] = writer.job.toLowerCase();
    } else {
      writers[writer.name] = (
        writers[writer.name] +
        ", " +
        writer.job
      ).toLowerCase();
    }
  });

  return (
    <Row className="bg-dark">
      <Col md="auto">
        <Image
          src={`https://image.tmdb.org/t/p/w300${dataSource.poster_path}`}
        />
      </Col>
      <Col>
        <Row className="text-center py-3">
          <h2>{dataSource.title}</h2>
        </Row>
        <Row>
          <Col className="d-flex flex-column">
            <p className={classes["original-title"]}>
              Original Title: {dataSource.original_title}
            </p>
            <ul className={`list-inline ${classes["title-details"]}`}>
              {certification && (
                <li className="text-light list-inline-item">
                  {certification}
                  <i className="bi bi-dot"></i>
                </li>
              )}
              <li className="text-light list-inline-item">
                {dataSource.release_date.slice(0, 4)}
                <i className="bi bi-dot"></i>
              </li>
              <li className="text-light list-inline-item">
                {minToHrs(dataSource.runtime)}
              </li>
            </ul>
          </Col>
          <Col xxl={4} xl={5} className="">
            <Row
              className={`${classes["action-btns"]} justify-content-xl-start flex-nowrap justify-content-center`}
            >
              <Col xs="auto" className="d-flex flex-column align-items-center">
                <div>Rating</div>
                <div>
                  <i className={`${classes.rating} bi bi-star-half fs-5`}></i>
                  <span className="fw-bold">
                    {dataSource.vote_average.toFixed(1)}
                  </span>
                  <span className="fw-lighter">/10</span>
                </div>
              </Col>

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    Mark as <strong>favorite</strong>.
                  </Tooltip>
                }
              >
                <Col
                  xs="auto"
                  className={`${classes.favorites} align-self-center justify-content-center align-items-center d-flex`}
                >
                  <i className={`bi bi-heart-fill`}></i>
                </Col>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    Add to your <strong>watchlist</strong>.
                  </Tooltip>
                }
              >
                <Col
                  xs="auto"
                  className={`${classes.favorites} align-self-center justify-content-center align-items-center d-flex`}
                >
                  <i className="watchlist bi bi-bookmark-plus-fill"></i>
                </Col>
              </OverlayTrigger>
              <Col
                xs="auto"
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <div>Popularity</div>
                <div className="d-flex align-items-center">
                  <img
                    className={classes["popularity-icon"]}
                    src={popularityIcon}
                    alt="popularity icon"
                  />
                  <span className="fw-bold">
                    {dataSource.popularity.toFixed()}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row xs="auto" className="mt-2 ms-1 justify-content-center">
          {dataSource.genres.map((genre, idx) => {
            return (
              <Col className={classes.genre} key={idx}>
                {genre.name}
              </Col>
            );
          })}
        </Row>

        <Row className="pt-4">
          <Row className="pb-4">
            <h5>Overview</h5>
            <p>{dataSource.overview}</p>
          </Row>
          <Row>
            <Col xs={4}>
              <div className="fw-bolder">Director</div>
              <div>
                {
                  dataSource.credits.crew.find((el) => el.job === "Director")
                    .name
                }
              </div>
            </Col>
            <Col xs={4}>
              <div className="fw-bolder">Writers</div>
              <div>
                {Object.keys(writers).map((writer, idx) => {
                  return (
                    <div key={idx}>
                      <span>{writer} </span>
                      <span className="fw-lighter">({writers[writer]})</span>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export default TitlePageHeader;