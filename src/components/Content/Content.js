import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MostPopularMovies from "../../pages/Movies/MostPopularMovies/MostPopularMovies";
import TopMovies from "../../pages/Movies/TopMovies/TopMovies";
import ByGenreMovies from "../../pages/Movies/ByGenreMovies/ByGenreMovies";
import ComingSoonMovies from "../../pages/Movies/ComingSoonMovies/ComingSoonMovies";
import NewsMovies from "../../pages/Movies/NewsMovies/NewsMovies";
import TopTVShows from "../../pages/TVShows/TopTVShows/TopTVShows";
import MostPopularTVShows from "../../pages/TVShows/MostPopularTVShows/MostPopularTVShows";
import ByGenreTVShows from "../../pages/TVShows/ByGenreTVShows/ByGenreTVShows";
import NewsTVShows from "../../pages/TVShows/NewsTVShows/NewsTVShows";
import BornTodayActors from "../../pages/Actors/BornTodayActors/BornTodayActors";
import MostPopularActors from "../../pages/Actors/MostPopularActors/MostPopularActors";
import NewsActors from "../../pages/Actors/NewsActors/NewsActors";
import Login from "../../pages/Login/Login";
import Account from "../../pages/Account/Account";
import { Container } from "react-bootstrap";
import MoviePage from "../../pages/Movies/MoviePage/MoviePage";
import TopCastCrew from "./components/TopCastCrew/TopCastCrew";
import ActorPage from "../../pages/Actors/ActorPage/ActorPage";
import SimilarTitles from "./components/SimilarTitles/SimilarTitles";
import VideosPage from "./components/VideosPage/VideosPage";

function Content({ loginStatus, handleLoginStatus }) {
  return (
    <Container fluid="lg">
      <Routes>
        <Route path="/movie-db-react" element={<Home />} />
        <Route path="movies">
          <Route path="top" element={<TopMovies />} />
          <Route path="most-popular" element={<MostPopularMovies />} />
          <Route path="by-genre" element={<ByGenreMovies />} />
          <Route path="coming-soon" element={<ComingSoonMovies />} />
          <Route path="news" element={<NewsMovies />} />
        </Route>
        <Route path="tv-shows">
          <Route path="top" element={<TopTVShows />} />
          <Route path="most-popular" element={<MostPopularTVShows />} />
          <Route path="by-genre" element={<ByGenreTVShows />} />
          <Route path="news" element={<NewsTVShows />} />
        </Route>
        <Route path="actors">
          <Route path="born-today" element={<BornTodayActors />} />
          <Route path="most-popular" element={<MostPopularActors />} />
          <Route path="news" element={<NewsActors />} />
        </Route>
        <Route
          path="login"
          element={
            <Login
              loginStatus={loginStatus}
              handleLoginStatus={handleLoginStatus}
            />
          }
        />
        <Route path="account" element={<Account />} />
        <Route path="movies/:movieId" element={<MoviePage />} />
        <Route path="movies/:movieId/top-cast" element={<TopCastCrew />} />
        <Route path="movies/:movieId/similar" element={<SimilarTitles />} />
        <Route path="movies/:movieId/videos" element={<VideosPage />} />
        {/* <Route path="tv-shows/:tvId" element={<TvShowPage />} /> */}
        <Route path="actors/:personId" element={<ActorPage />} />
        <Route
          path="*"
          element={
            <div className="d-flex justify-content-center fs-1">
              Page not found.
            </div>
          }
        />
      </Routes>
    </Container>
  );
}

export default Content;