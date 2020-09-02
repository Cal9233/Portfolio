import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      postion: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50%-1px)",
        right: "auto",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography varient="h4" align="center">
          Working Experience
        </Typography>
      </Box>
      <Box component="div" className={classes.timeLine}>
        <Typography varient="h2">2020</Typography>
      </Box>
    </>
  );
};

export default Resume;
