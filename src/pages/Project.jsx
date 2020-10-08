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
import logo from "../image/logo.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#002642",
    height: "100vh",
    margin: 0,
    padding: 0,
  },
  cardContainer: {
    maxWidth: 445,
    maxHeight: 445,
    margin: "5rem auto",
    background: "#040F0F",
  },
  text: {
    // display: "none",
    color: "#E5DADA",
    verticalAlign: "middle",
    transfrom: "translate(20%, 20%)",
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
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ color: "#FCFFFC" }}
                >
                  Got Tech?
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "#FCFFFC" }}
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
                style={{ color: "#FCFFFC" }}
                href="https://github.com/Cal9233/GotTech"
              >
                Github
              </Button>
              <Button size="small" color="primary" style={{ color: "#FCFFFC" }}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <div className={classes.text}>
          <h3> Technologies Used </h3>
          <ul>
            <li>React</li>
            <li>Axios</li>
            <li>Github</li>
            <li>HTML/CSS</li>
            <li>Heroku</li>
            <li>Bootstrap</li>
            <li>Codepen</li>
            <li>Mockflow</li>
            <li>React Router Dom</li>
          </ul>
        </div>
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
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ color: "#FCFFFC" }}
                >
                  COVID-19
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "#FCFFFC" }}
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
                style={{ color: "#FCFFFC" }}
                href="https://github.com/Cal9233/COVID-19"
              >
                Github
              </Button>
              <Button
                size="small"
                color="primary"
                style={{ color: "#FCFFFC" }}
                href="corona-19-cases.netlify.app"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <div className={classes.text}>
          <h3> Technologies Used </h3>
          <ul>
            <li>React</li>
            <li>Axios</li>
            <li>Github</li>
            <li>HTML/CSS</li>
            <li>Heroku</li>
            <li>Material-UI</li>
            <li>Chart-js</li>
          </ul>
        </div>
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
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ color: "#FCFFFC" }}
                >
                  WynIt
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "#FCFFFC" }}
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
                style={{ color: "#FCFFFC" }}
                href="https://github.com/Cal9233/Timer-app"
              >
                Github
              </Button>
              <Button
                size="small"
                color="primary"
                style={{ color: "#FCFFFC" }}
                href="http://secret-retreat-95639.herokuapp.com/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <div className={classes.text}>
          <h3> Technologies Used </h3>
          <ul>
            <li>MERN</li>
            <li>Chart.js</li>
            <li>Github</li>
            <li>HTML/CSS</li>
            <li>Heroku</li>
            <li>Bootstrap</li>
            <li>framer-motion</li>
            <li>Mockflow</li>
            <li>sendgrid/mail</li>
            <li>Passport</li>
            <li>fullcalender</li>
          </ul>
        </div>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={logo}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ color: "#FCFFFC" }}
                >
                  GenThrust
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "#FCFFFC" }}
                >
                  Client website currently in development
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" style={{ color: "#FCFFFC" }}>
                Github
              </Button>
              <Button size="small" color="primary" style={{ color: "#FCFFFC" }}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <div className={classes.text}>
          <h3> Technologies Used </h3>
          <ul>
            <li>React</li>
            <li>iframe</li>
            <li>Github</li>
            <li>HTML/CSS</li>
            <li>Heroku</li>
            <li>Bootstrap</li>
            <li>Email.js</li>
          </ul>
        </div>
      </Grid>
    </Box>
  );
};

export default Portfolio;
