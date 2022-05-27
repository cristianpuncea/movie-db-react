import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import TitleCast from "../../../components/Content/components/TitleCast/TitleCast";
import TitleImages from "../../../components/Content/components/TitleImages/TitleImages";
import TitlePageHeader from "../../../components/Content/components/TitlePageHeader/TitlePageHeader";
import TitleRecommendations from "../../../components/Content/components/TitleRecommendations/TitleRecommendations";
import TitleVideos from "../../../components/Content/components/TitleVideos/TitleVideos";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";


function TvShowPage() {
  const { tvId } = useParams();
  const [details, setDetails] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US&include_image_language=en,null&append_to_response=videos,images,credits,similar,content_ratings`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(true));
  }, [tvId]);

  if (error) {
    return <ErrorPage />;
  } else if (!isLoaded) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <Container className="my-5">
          <TitlePageHeader type="tv" dataSource={details} />
          {/* <TitleVideos dataSource={details} /> */}
          <TitleCast dataSource={details} />
          <TitleImages dataSource={details} />
          <TitleRecommendations type="tv" dataSource={details} />
        </Container>
      </>
    );
  }
}

export default TvShowPage;
