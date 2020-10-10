import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Fab,
  Box,
  Toolbar,
} from "@material-ui/core";
import { Home, Apps, ContactMail } from "@material-ui/icons";
import CodeIcon from "@material-ui/icons/Code";
import me from "../image/me.png";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    background: "#002642",
    height: "100%",
    width: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  listItem: {
    color: "#E5DADA",
  },
  button: {
    borderRadius: "50px",
  },
}));

const menuIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Apps />,
    listText: "Project",
    listPath: "/project",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={me} alt="Cal" />
      <Divider />
      <List>
        {menuIcons.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#E59500" }}>
          <Toolbar>
            <Fab
              variant="extended"
              className={classes.button}
              onClick={toggleSlider("left", true)}
            >
              <IconButton>
                <CodeIcon style={{ background: "#E5DADA" }} />
              </IconButton>
            </Fab>
            <Typography
              variant="h5"
              style={{ color: "#E5DADA", marginLeft: "1%" }}
            >
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="left"
              open={state.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
