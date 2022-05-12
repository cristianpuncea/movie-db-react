import { useParams } from "react-router-dom";
import GetTitles from "../Movies/GetTitles/GetTitles";

function Genre() {
  const { genre } = useParams();
  const id = genre.split("-").shift();
  const genreType = genre.split("-").slice(1).map(item => item.charAt(0).toUpperCase() + item.slice(1) + " ");

  return (
    <GetTitles
      fetchPath={`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=f32f5745a157ac7e0c2013a20219c5e8`}
      linkPath={`/movies/by-genre/${genre}`}
      pageTitle={genreType}
    />
  );
}

export default Genre;
