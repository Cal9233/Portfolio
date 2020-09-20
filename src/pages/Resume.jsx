import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import { resume } from "../assets/Resume.pdf";

const useStyles = makeStyles({});

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        component="div"
        className={classes.body}
        style={{ background: "#141000", height: "100vh" }}
      >
        <Navbar />
        <Grid container justify="center">
          <a href={resume} download>
            <Button type="button">Download Resume</Button>
          </a>
        </Grid>
      </Box>
    </>
  );
};

export default Resume;
