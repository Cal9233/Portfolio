import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import message from "../image/message.png";

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
    color: "tan",
    borderColor: "tan",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tan",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "& .Mui-focused field": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.message}>
      <Navbar />
      <Grid container justify="center">
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
              color: "tan",
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
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            requred
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            required
            label="Company Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            required
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="large"
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
