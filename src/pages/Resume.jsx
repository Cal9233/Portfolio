import React from "react";
import { Box, Typography, Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import resume from "../assets/Resume.pdf";

const useStyles = makeStyles({
  // body: {
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   position: "absolute",
  //   alignItems: "center",
  // },
  button: {
    marginBottom: "1rem",
    color: "#E59500",
    borderColor: "#E59500",
  },
});

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" style={{ background: "#141000", height: "100vh" }}>
        <Navbar />
        <Container alignItems="center" container justify="center">
          <br />
          <br />
          <br />
          <br />
          <Typography
            variant="h2"
            alignItems="center"
            style={{
              color: "#E5DADA",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            About me
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <Typography
            variant="h5"
            alignItems="center"
            style={{
              justify: "center",
              color: "#E5DADA",
              width: "60%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Cal is a creative and motivated web developer who is ready to roll
            up his sleeves and solve any problem in front of him. He is a strong
            communicator and took lead as project manager and full-stack
            developer on multiple projects. Prior to Wyncode he was working in
            the medical field as PT intern and holds a BA degree in Gradual
            Studies from University of Central Florida.
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <Fab
            variant="extended"
            className={classes.button}
            alignItems="center"
            href={resume}
            color="#E59500"
            download
          >
            Download Resume
          </Fab>
        </Container>
      </Box>
    </>
  );
};

export default Resume;
