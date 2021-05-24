import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    flexDirection: 'column',
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    marginBottom: '5px',
    color: theme.palette.secondary.main,

  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  reach: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cont: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
    '&::after': {
      content:'',
      display: 'block',
      maring: '0 auto',
      width: '15px',
      paddingTop: '20px',
      borderBottom: '3px solid ${theme.palette.secondary.main}',
    }
  },
  reachCont: {
    padding: '0 20px 0 20px',
  },
  bottom: {
    display: 'flex',
    displayDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '10px',
  },
  bottext: {
    color: theme.palette.common.white,
    fontSize: '12px',
  },
  botlinks: {
    display: 'flex',
    flexDirection: 'row',
  },
  a: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5} className={classes.reachCont}>
          <Grid item xs={12} sm={4}>
            <div className={classes.reach}>
              <LocationOnIcon className={classes.icon} />
              <Typography className={classes.title}>Address</Typography>
                <a className={classes.a} align='center'  href="https://www.google.com/maps/place/SBT+Labs/@33.7823142,-118.1636036,15z/data=!4m5!3m4!1s0x0:0xdf735fa99b01a045!8m2!3d33.7824771!4d-118.1636036">
                 2338 E. Anaheim St.
                    Suite 202B,
                    Long Beach,
                    CA 90804
                </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.reach}>
              <PhoneIcon className={classes.icon} />
              <Typography className={classes.title}>Phone</Typography>
                <a className={classes.a} href="tel:562 800 7420" align='center'>
                  (562) 800-7420
                </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.reach}>
              <EmailIcon className={classes.icon} />
              <Typography className={classes.title}>Email</Typography>
                <a className={classes.a} component='a' align='center' href="mailto:contactus@sbtlabs.com">
                contactus@sbtlabs.com
                </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      <section className={classes.bottom}>
        <div className={classes.botlinks}>
          <Link to="/terms" className={classes.a}>
            <Typography style={{fontSize:'12px', paddingRight:'8px'}}>Terms & Conditions</Typography>
          </Link>
          <Link to="/privacy" className={classes.a}>
            <Typography style={{fontSize:'12px'}}>Privacy Policy</Typography>
          </Link>
        </div>
        <Typography align="center" className={classes.bottext}>LIC# C8-0000046-LIC</Typography>
        <Typography className={classes.bottext}>&copy; Copyright <strong>SBT Labs</strong>. All Rights Reserved</Typography>
      </section>
    </Typography>
  );
}
