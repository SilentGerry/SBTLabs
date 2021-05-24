import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import SecurityIcon from '@material-ui/icons/Security';
import VpnLockIcon from '@material-ui/icons/VpnLock';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    background: 'url(/Honeycomb-03.png),rgba(195, 236, 232, .4)',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  'root::before': {
    content: 'apples',
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    height: '100%',
    opacity: .95,
    borderRadius: '10px',
    justifyContent: 'flex-start',
  },
  image: {
    height: 55,
    marginTop: '15px',
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginBottom: theme.spacing(2),
    width:'80%',
  },
  verticalDivider: {
    height: '20px',
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  pillars: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    maxWidth:'450px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '10px',
  },
  box: {
    display: 'flex',
    flexDirection:'row',
    height:'auto',
  },
  pillar: {
    align: 'center',
    justifyContent: 'center',
    minWidth:'110px',
    fontSize: '18px',
  }
});

function Commitment (props) {
  const { classes } = props;

  return (
    <div>
    <Typography className="top-pad-home" variant="h3" marked="center" align="center" component="h2">
        What To Expect
    </Typography>
      <Container overflow="hidden" className={classes.pillars}>
        <Typography align="center" variant="h5" className={classes.pillar}>
          Secure
        </Typography>
        <Divider orientation="vertical" className={classes.verticalDivider}/>
        <Typography align="center" variant="h5" className={classes.pillar}>
          Commited
        </Typography>
        <Divider orientation="vertical" className={classes.verticalDivider}/>
        <Typography align="center" variant="h5" className={classes.pillar}>
          Private
        </Typography>
      </Container>
    <Paper elevation={4} square="true" className={classes.root}>
      <Container className={classes.container}>
        {/*<img
          src="/Honeycomb-04.svg"
          className={classes.curvyLines}
          alt="curvy lines"
        />*/}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card raised="true" className={classes.item}>
              <SecurityIcon style={{fontSize:50}} className={classes.image}/>
              <Typography align="center" variant="h6" className={classes.title}>
                Security
              </Typography>
              <Divider variant="fullWidth" className={classes.divider}/>
              <List>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Fully secured lab with biometric access</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">24/7 surveillance</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Secured sample storage</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card raised="true" className={classes.item} style={{justifyContent:'center'}}>
              <Typography align="center" variant="h4" className={classes.title}>
                Not Just A Client But A Partner
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card raised="true" className={classes.item}>
              <VpnLockIcon style={{fontSize:50}} className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Privacy
              </Typography>
              <Divider variant="fullWidth" className={classes.divider}/>
              <List>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Your information is secure</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">All staff members sign NDAs</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Advanced database security</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    </div>
  );
}

Commitment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Commitment);