import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ByGenreMovies from "../../pages/Movies/ByGenreMovies/ByGenreMovies";
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
import Container from "react-bootstrap/Container";
import MoviePage from "../../pages/Movies/MoviePage/MoviePage";
import TopCastCrew from "./components/TopCastCrew/TopCastCrew";
import ActorPage from "../../pages/Actors/ActorPage/ActorPage";
import SimilarTitles from "./components/SimilarTitles/SimilarTitles";
import ImagesPage from "./components/ImagesPage/ImagesPage";
import GetTitles from "../../pages/Movies/GetTitles/GetTitles";
import Genre from "../../pages/Genre/Genre";

function Content({ loginStatus, handleLoginStatus }) {

  return (
    <Container fluid="lg">
      <Routes>
        <Route path="/movie-db-react" element={<Home />} />
        <Route path="movies">
          <Route path="top" element={<Navigate to="1" />} />
          <Route
            path="top/:pageID"
            element={
              <GetTitles
                fetchPath="https://api.themoviedb.org/3/movie/top_rated?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US"
                linkPath="/movies/top"
                pageTitle="Top Movies"
              />
            }
          />
          <Route path="most-popular" element={<Navigate to="1" />} />
          <Route
            path="most-popular/:pageID"
            element={
              <GetTitles
                fetchPath="https://api.themoviedb.org/3/movie/popular?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US"
                linkPath="/movies/most-popular"
                pageTitle="Most Popular Movies"
              />
            }
          />
          <Route path="by-genre" element={<ByGenreMovies />} />
          <Route path="by-genre/:genre" element={<Navigate to="1" />} />
          <Route path="by-genre/:genre/:pageID" element={<Genre />} />
          <Route path="coming-soon" element={<Navigate to="1" />} />
          <Route
            path="coming-soon/:pageID"
            element={
              <GetTitles
                fetchPath="https://api.themoviedb.org/3/movie/upcoming?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US"
                linkPath="/movies/coming-soon"
                pageTitle="Upcoming Movies"
              />
            }
          />
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
        <Route path="movies/:movieId/images" element={<ImagesPage />} />
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
