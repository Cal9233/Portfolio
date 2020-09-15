import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import Transition from "./Transition";
import me from "../image/me.png";

const useStyles = makeStyles((theme) => ({
  me: {
    width: theme.spacing(60),
    height: theme.spacing(60),
    margin: theme.spacing(1),
    left: theme.spacing(80),
    top: theme.spacing(10),
  },
  title: {
    color: "#FFD300",
    position: "relative",
    minHeight: "150px",
    top: 100,
  },
  subtitles: {
    color: "#BCD7DD",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
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
      <Typography className={classes.subtitles} variant="h5">
        <Transition />
      </Typography>
    </Box>
  );
};

export default Header;
