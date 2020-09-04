import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import me from "../image/me.png";

//CSS
const useStyles = makeStyles((theme) => ({
  me: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    left: "50%",
  },
  title: {
    color: "tomato",
  },
  subtitles: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50",
    // transform: "translate(-50%, -50%)",
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
      <Typography className={classes.title} variant="h4">
        <Typed stings={["Calvin Malagon"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitles} variant="h5">
        <Typed
          strings={["Web Deaa", "Web Developer", "Full Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
