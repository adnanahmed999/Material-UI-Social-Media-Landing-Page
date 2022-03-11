import React from "react";
import TextField from "@material-ui/core/TextField";
import MuiAlert from "@material-ui/lab/Alert";

import {
  Button,
  Container,
  Grid,
  makeStyles,
  MenuItem,
  Snackbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {},
  div: {
    width: 500,
    height: "auto",
    background: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    marginTop: theme.spacing(6),
  },
  item: {
    padding: theme.spacing(2),
  },
}));

const currencies = [
  {
    value: "Public",
    label: "Public",
  },
  {
    value: "Private",
    label: "Private",
  },
];

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function () {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("EUR");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container className={classes.div}>
      <Grid container>
        <Grid item xs={12} className={classes.item}>
          <TextField
            id="outlined-basic"
            label="Topic"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Text"
            multiline
            rows={4}
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Privacy"
            variant="outlined"
            style={{ width: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item className={classes.item}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Done
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Container>
  );
}
