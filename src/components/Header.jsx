import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import me from "../image/me.png";

//CSS
const useStyles = makeStyles((theme) => ({
  me: {
    width: theme.spacing(60),
    height: theme.spacing(60),
    margin: theme.spacing(1),
    left: theme.spacing(80),
    // top: theme.spacing(5),
  },
  title: {
    color: "#BCD7DD",
  },
  subtitles: {
    color: "#BCD7DD",
    marginBottom: "3rem",
  },
  aboutMe: {
    color: "#BCD7DD",
  },
  typedContainer: {
    position: "absolute",
    // top: "50%",
    left: "50",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justified="center">
        <Avatar className={classes.me} src={me} alt="Cal" />
      </Grid>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Calvin Malagon"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.aboutMe} variant="h4">
        <Typed
          strings={[
            "Cal is a creative and motivated web developer who is ready to roll up his sleeves and solve any problem in front of him.  He is a strong communicator and took lead as project manager and front end/back end developer on his final project, a MERN app that helps users monitor their productivity. Prior to Wyncode he was working in the medical field as PT intern and holds a BA degree in Gradual Studies from University of Central Florida.",
          ]}
          typeSpeed={3}
        />
      </Typography>
      <br />
      <Typography className={classes.subtitles} variant="h5">
        <Typed
          strings={[
            "Javascript",
            "React",
            "Mern Stack",
            "Passport",
            "HTML/CSS",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
