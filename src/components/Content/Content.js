import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import BornTodayActors from "../../pages/Actors/BornTodayActors/BornTodayActors";
import MostPopularActors from "../../pages/Actors/MostPopularActors/MostPopularActors";
import NewsActors from "../../pages/Actors/NewsActors/NewsActors";
import Login from "../../pages/Login/Login";
import Account from "../../pages/Account/Account";
import Container from "react-bootstrap/Container";
import MoviePage from "../../pages/Titles/MoviePage/MoviePage";
import TopCastCrew from "./components/TopCastCrew/TopCastCrew";
import ActorPage from "../../pages/Actors/ActorPage/ActorPage";
import SimilarTitles from "./components/SimilarTitles/SimilarTitles";
import ImagesPage from "./components/ImagesPage/ImagesPage";
import GetTitles from "../../pages/Titles/GetTitles/GetTitles";
import Genre from "../../pages/Genre/Genre";
import TvShowPage from "../../pages/Titles/TvShowPage/TvShowPage";
import ByGenreTV from "../../pages/Titles/ByGenreTV/ByGenreTV";
import ByGenreMovie from "../../pages/Titles/ByGenreMovie/ByGenreMovie";

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
                titleType="movie"
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
                titleType="movie"
              />
            }
          />
          <Route path="by-genre" element={<ByGenreMovie />} />
          <Route path="by-genre/:genre" element={<Navigate to="1" />} />
          <Route path="by-genre/:genre/:pageID" element={<Genre titleType="movie" />} />
          <Route path="coming-soon" element={<Navigate to="1" />} />
          <Route
            path="coming-soon/:pageID"
            element={
              <GetTitles
                fetchPath="https://api.themoviedb.org/3/movie/upcoming?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US"
                linkPath="/movies/coming-soon"
                pageTitle="Upcoming Movies"
                titleType="movie"
              />
            }
          />
        </Route>
        <Route path="tv-shows">
          <Route path="top" element={<Navigate to="1" />} />
          <Route
            path="top/:pageID"
            element={
              <GetTitles
                fetchPath="https://api.themoviedb.org/3/tv/top_rated?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US"
                linkPath="/tv-shows/top"
                pageTitle="Top TV Shows"
                titleType="tv"
              />
            }
          />
          <Route path="most-popular" element={<Navigate to="1" />} />
          <Route
            path="most-popular/:pageID"
            element={
              <GetTitles
                fetchPath="https://api.themoviedb.org/3/tv/popular?api_key=f32f5745a157ac7e0c2013a20219c5e8&language=en-US"
                linkPath="/tv-shows/most-popular"
                pageTitle="Most Popular TV Shows"
                titleType="tv"
              />
            }
          />
          <Route path="by-genre" element={<ByGenreTV />} />
          <Route path="by-genre/:genre" element={<Navigate to="1" />} />
          <Route path="by-genre/:genre/:pageID" element={<Genre titleType="tv" />} />
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
        <Route path="movie/:movieId" element={<MoviePage />} />
        <Route path="movie/:movieId/cast" element={<TopCastCrew />} />
        <Route path="movie/:movieId/similar" element={<SimilarTitles />} />
        <Route path="movie/:movieId/images" element={<ImagesPage />} />
        <Route path="tv/:tvId" element={<TvShowPage />} />
        <Route path="actor/:personId" element={<ActorPage />} />
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
