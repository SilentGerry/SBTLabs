import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, {useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import Container from '@material-ui/core/Container';
import * as Yup from "yup";
import { Formik } from "formik";
import Card from '@material-ui/core/Card';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
    minHeight: '64vh',
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
  intro: {
    width:'70%',
    margin: '15px',
  },
  card: {
    padding: '15px'
  }
}));


function SignIn(props) {
  const classes = useStyles();

  const [empEmailSent, setEmpEmailSent] = useState(false);

  function sendEmail(e) {
    emailjs.init("user_YUA1db7jgxQAdA13IE9sC");
    e.preventDefault();
    emailjs.sendForm('service_b8yqh3m', 'template_2gi006p', e.target, 'user_YUA1db7jgxQAdA13IE9sC')
      .then((result) => {
          console.log(result.text);
          setEmpEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  if(empEmailSent) {
    return <Redirect to='/' />
  }

  return (
    <React.Fragment>
      <AppAppBar />
        <Container className={classes.root}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Careers At Sbt Labs
          </Typography>
          <div className={classes.intro}>
            <Typography variant="subtitle2" align="center">
              Thank you for your interest in working at SBT Labs. We are always looking for motivated and talented people to join our team. Please fill out and submit the form below.
            </Typography>
            <Card className={classes.card}>
              <form onSubmit={sendEmail}>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  label="First Name"
                  type="text"
                  name="first_name"
                  style={{width:'50%', paddingRight:'10px'}}
                />
                <TextField
                  required
                  margin="dense"
                  id="name"
                  label="Last Name"
                  type="text"
                  name="last_name"
                  style={{width:'50%'}}
                />
                <TextField
                  required
                  margin="dense"
                  id="name"
                  label="Phone Number"
                  type="tel"
                  name="contact_number"
                  fullWidth
                />
                <TextField
                  required
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  name="user_email"
                />
                {/*<Button
                  className={classes.button}
                  variant="contained"
                  component="label"
                >
                  Upload Resume
                  <input
                    type="file"
                    hidden
                    name="resume"
                  />
                </Button>*/}
                <div style={{display:'flex', flexDirection:'row', padding: '15px 0 15px 0', justifyContent:'flex-end'}}>
                  <Button type="submit" color="secondary">
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
