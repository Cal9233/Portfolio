import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  message: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
  },
  button: {
    marginTop: "1rem",
    color: "#ffd300",
    borderColor: "#ffd300",
  },
  aboutMe: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  fade: {},
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ffd300",
    },
    "& label": {
      color: "#ffd300",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffd300",
      },
      "&:hover fieldset": {
        borderColor: "#ffd300",
      },
      "& .Mui-focused field": {
        borderColor: "#ffd300",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "#141000", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center" className={classes.message}>
        <Box
          component="form"
          className={classes.form}
          method="POST"
          action="/contact"
          name="contact"
        >
          <Typography
            variant="h2"
            style={{
              color: "#ffd300",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            About me
          </Typography>
          <Typography variant="h5" style={{ color: "#ffd300" }}>
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
          <Typography
            variant="h2"
            style={{
              color: "#ffd300",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contact me!
          </Typography>
          <InputField type="hidden" name="form-name" value="contact" />
          <InputField
            fullWidth={true}
            required
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "#ffd300" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            requred
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "#ffd300" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            required
            label="Company Name"
            variant="outlined"
            inputProps={{ style: { color: "#ffd300" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            required
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "#ffd300" } }}
            margin="dense"
            size="medium"
            multiline
            rows={8}
            rowsMax={10}
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
