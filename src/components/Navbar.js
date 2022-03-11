import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";

// Icons
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles/colorManipulator";

import React from "react";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  flexDisplay: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    position:"sticky",
    top: 0
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.flexDisplay}>
        <Typography variant="h6">Material-UI</Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search" className={classes.input} />
        </div>
        <div className={classes.flexDisplay}>
          <Badge badgeContent={4} color="primary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="primary" className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://static1.bigstockphoto.com/1/7/2/large1500/27169880.jpg"
            className={classes.small}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
