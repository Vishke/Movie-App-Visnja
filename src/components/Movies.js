import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as MovieLink } from "react-router-dom";
import {
  Card,
  Grid,
  Box,
  Typography,
  CardMedia,
  CardContent,
  Link,
  Pagination,
} from "@mui/material";
import theme from "../theme/theme";
import { getMovies } from "../store/movies-slice";

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const href = `https://www.imdb.com/title`;

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const indexOfLastPost = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastPost - moviesPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box component="div" sx={{ width: "80vw", height: "auto" }}>
        <Typography marginTop={10} variant="h2">
          List of Movies
        </Typography>
        <Grid container spacing={4} marginTop={10}>
          {currentPosts &&
            currentPosts.map((movie, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MovieLink
                  style={{ textDecoration: "none" }}
                  to={`/Movie/${movie.id}`}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="https://www.orange.nsw.gov.au/wp-content/uploads/2021/12/Fall-Movie-Review.jpg"
                      alt="movie"
                    />
                    <CardContent
                      sx={{ flexGrow: 1, color: theme.palette.main }}
                    >
                      <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                      </Typography>
                      <Link
                        rel="noopener"
                        target="_blank"
                        href={`${href}/${movie.id}`}
                        underline="none"
                        sx={{ color: theme.palette.white }}
                      >
                        <Typography
                          sx={{
                            color: theme.palette.white,
                            textDecoration: "none",
                          }}
                        >
                          Click here to see details on IMDB Page
                        </Typography>
                      </Link>
                    </CardContent>
                  </Card>
                </MovieLink>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Pagination count={10} page={currentPage} onChange={handleChange} />
    </>
  );
};

export default Movies;
