import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";
import TitlePageHeader from "../../../components/Content/components/TitlePageHeader/TitlePageHeader";
import TitleCast from "../../../components/Content/components/TitleCast/TitleCast";
import TitleRecommendations from "../../../components/Content/components/TitleRecommendations/TitleRecommendations";
import TitleVideos from "../../../components/Content/components/TitleVideos/TitleVideos";

export default function MoviePage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US&append_to_response=videos,images,credits,similar,release_dates`
    )
      .then((res) => res.json())
      .then((data) => setDetails((prevData) => ({ ...prevData, ...data })))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, [movieId]);

  if (error) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <>
        {console.log({ details })}
        <Container className="my-5">
          <TitlePageHeader dataSource={details} />
          <TitleVideos dataSource={details} />
          <TitleCast dataSource={details} />
          <TitleRecommendations dataSource={details} />
        </Container>
      </>
    );
  }
}