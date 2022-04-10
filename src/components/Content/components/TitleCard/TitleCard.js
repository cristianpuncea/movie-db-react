import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import ErrorPage from "../../../ErrorPage/ErrorPage";
import LoadingPage from "../../../LoadingPage/LoadingPage";
import { Link } from "react-router-dom";
import classes from "./TitleCard.module.scss";

export default function TitleCard({ id, title, imgUrl, released, vote }) {
  const [imgDetails, setImgDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const formatReleaseDate = (strDate) => {
    const dateArray = strDate.split("-");
    const date = new Date(...dateArray);
    const formatedDateArray = date.toDateString().split(" ").slice(1);
    const year = formatedDateArray.pop();
    const formatedDate = formatedDateArray.join(" ").concat(", ", year);
    return formatedDate;
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=f32f5745a157ac7e0c2013a20219c5e8`
    )
      .then((res) => res.json())
      .then((data) => setImgDetails((img) => ({ ...img, ...data })))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, []);

  if (error) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <Card
        style={{ width: "14rem" }}
        className={`bg-dark mx-2 px-0 ${classes["movie-card"]}`}
        border="warning"
      >
        <Link to={`/movies/${id}`}>
          <Card.Img
            variant="top"
            src={
              imgDetails.images.secure_base_url +
              imgDetails.images.still_sizes[2] +
              imgUrl
            }
          />
        </Link>
        <Card.Body>
          <Link to={`/movies/${id}`} className={classes["title-link"]}>
            <Card.Title as="span" className={`text-light fs-5 fw-bold ${classes["movie-title"]}`}>
              {title}
            </Card.Title>
          </Link>
          <Card.Text className="text-secondary">
          {formatReleaseDate(released)}
          </Card.Text>  
        </Card.Body>
      </Card>
    );
  }
}
