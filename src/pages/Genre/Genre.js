import { useParams } from "react-router-dom";
import GetTitles from "../Titles/GetTitles/GetTitles";

function Genre({ titleType }) {
  const { genre } = useParams();
  const id = genre.split("-").shift();
  const genreType = genre.split("-").slice(1).map(item => item.charAt(0).toUpperCase() + item.slice(1) + " ");
  const path = titleType === "tv" ? "tv-shows" : titleType === "movie" ? "movies" : "BOOM";

  return (
    <GetTitles
      fetchPath={`https://api.themoviedb.org/3/discover/${titleType}?with_genres=${id}&api_key=f32f5745a157ac7e0c2013a20219c5e8`}
      linkPath={`/${path}/by-genre/${genre}`}
      pageTitle={genreType}
      titleType={titleType}
    />
  );
}

export default Genre;
