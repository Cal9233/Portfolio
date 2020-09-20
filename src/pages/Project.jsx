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
import Navbar from "../components/Navbar";
import project1 from "../image/GotTech.png";
import project2 from "../image/Corona.jpg";
import project3 from "../image/WynIt.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "tan",
    height: "100%",
    margin: 0,
    padding: 0,
  },
  cardContainer: {
    maxWidth: 445,
    maxHeight: 445,
    margin: "5rem auto",
    background: "#141000",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: "tan" }}>
                  Got Tech?
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "tan" }}
                >
                  This is a Job Search engine focusing on SoftWare Development,
                  to facilitate the use of a Job Search website without clutter,
                  adds and tracking.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                style={{ color: "tan" }}
                href="https://github.com/Cal9233/GotTech"
              >
                Github
              </Button>
              <Button size="small" color="primary" style={{ color: "tan" }}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: "tan" }}>
                  COVID-19
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "tan" }}
                >
                  An API frontend displaying global COVID-19 cases. Using
                  Chart.js, React/JS and data from REST API.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                style={{ color: "tan" }}
                href="https://github.com/Cal9233/COVID-19"
              >
                Github
              </Button>
              <Button size="small" color="primary" style={{ color: "tan" }}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: "tan" }}>
                  WynIt
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "tan" }}
                >
                  A productivity app created to make most of your time
                  proficient.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                style={{ color: "tan" }}
                href="https://github.com/Cal9233/Timer-app"
              >
                Github
              </Button>
              <Button
                size="small"
                color="primary"
                style={{ color: "tan" }}
                href="http://secret-retreat-95639.herokuapp.com/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 4" height="140" />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: "tan" }}>
                  Scrumy
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "tan" }}
                >
                  Possible Web App created for team management allowing access
                  to versitile
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" style={{ color: "tan" }}>
                Github
              </Button>
              <Button size="small" color="primary" style={{ color: "tan" }}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
