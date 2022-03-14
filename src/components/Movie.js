import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../store/comment-slice";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import theme from "../theme/theme";

const Movie = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={4}
      sx={{ height: "100vh", marginTop: "5rem", padding: "0 5rem" }}
    >
      <Grid item xs={4}>
        <Card>
          <CardActions>
            <Typography variant="h3"></Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        {comments &&
          comments.map((comment) => (
            <Card
              variant="outlined"
              sx={{
                color: theme.palette.main,
                bgcolor: theme.palette.topBar,
              }}
              key={comment.id}
            >
              <CardContent>
                <Typography gutterBottom component="h2">
                  Comments: {comment.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Grid>
    </Grid>
  );
};

export default Movie;
