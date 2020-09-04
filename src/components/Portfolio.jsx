import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import project1 from "../image/Project-1.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          Project 1
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.mainContainer}>
              <CardActionArea>
                <CardMedia
                  components="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio culpa quae explicabo aspernatur ad doloremque, vel
                    nam? Corrupti eligendi impedit architecto doloribus in
                    cumque, reprehenderit ratione laborum laboriosam molestiae
                    vel.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          Project 2
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.mainContainer}>
              <CardActionArea>
                <CardMedia
                  components="img"
                  alt="Project 1"
                  height="140"
                  //   image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio culpa quae explicabo aspernatur ad doloremque, vel
                    nam? Corrupti eligendi impedit architecto doloribus in
                    cumque, reprehenderit ratione laborum laboriosam molestiae
                    vel.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          Project 2
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.mainContainer}>
              <CardActionArea>
                <CardMedia
                  components="img"
                  alt="Project 1"
                  height="140"
                  //   image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio culpa quae explicabo aspernatur ad doloremque, vel
                    nam? Corrupti eligendi impedit architecto doloribus in
                    cumque, reprehenderit ratione laborum laboriosam molestiae
                    vel.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
