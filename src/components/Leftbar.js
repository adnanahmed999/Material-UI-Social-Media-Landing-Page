import { Container, Grid, List, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Apps,
  CameraAlt,
  Collections,
  ExitToApp,
  Home,
  Person,
  Settings,
  VideoCall,
} from "@material-ui/icons";
import ListIcon from "@material-ui/icons/List";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    border: "1px solid grey",
    position: "sticky",
    top: 60,
  },
  item: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    margin: theme.spacing(2),
  },
}));

export default function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <CameraAlt className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <VideoCall className={classes.icon} />
        <Typography className={classes.text}>Video</Typography>
      </div>
      <div className={classes.item}>
        <Apps className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Collections className={classes.icon} />
        <Typography className={classes.text}>Collection</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Log out</Typography>
      </div>
    </Container>
  );
}
