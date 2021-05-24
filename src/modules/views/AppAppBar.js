import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ContactUs from '../components/ContactEmail'

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.primary.dark,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  link: {
    'text-decoration': 'none'
  },
});

function AppAppBar(props) {
  const { classes } = props;

  const[open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link to={"/"} className={classes.link}>
            <img className={classes.logo} src="/SBT-logo-black.svg" width={100} alt="Logo" class="logo-filter"/>
          </Link>
          <div className={classes.right}>
            <Link to={"/"} className={classes.link}>
              <Typography
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
              >
                {"Home"}
              </Typography>
            </Link>
            <Link to={"/signin"} className={classes.link}>
              <Typography
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
              >
                {"Careers"}
              </Typography>
            </Link>
            <Link onClick={handleClickOpen} className={classes.link}>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"Contact Us"}
            </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out all the information below. A respresentative will contact you shortly.
          </DialogContentText>
            <ContactUs handlePop={handleClose}/>
          </DialogContent>
          {/*<TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary.dark">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary.dark">
            Send
          </Button>
        </DialogActions>*/}
      </Dialog>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
