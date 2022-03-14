import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

function App({ movies }) {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
