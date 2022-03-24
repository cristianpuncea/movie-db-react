import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import ErrorPage from "../../../ErrorPage/ErrorPage";
import LoadingPage from "../../../LoadingPage/LoadingPage";
import { Link } from "react-router-dom";

export default function TitleCard({ id, title, imgUrl, released, vote }) {
  const [imgDetails, setImgDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
      <Card style={{ width: "18rem" }} className="bg-dark mx-2">
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
          <Link to={`/movies/${id}`}>
            <Card.Title className="text-light">{title}</Card.Title>
          </Link>
          <Card.Text className="text-light">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
