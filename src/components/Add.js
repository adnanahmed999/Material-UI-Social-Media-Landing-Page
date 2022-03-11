import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Form from "./Form";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
}));

export default function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form />
      </Modal>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}
