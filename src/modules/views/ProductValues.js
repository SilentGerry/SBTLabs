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
import box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TimeLapseIcon from '@material-ui/icons/Timelapse';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    background: 'url(/Honeycomb-04.png),rgba(38, 161, 171, .3)',
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
    maxWidth: '450px',
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
    fontSize: '18px',
    justifyContent: 'center',
    minWidth:'110px',
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <div>
    <Typography className="top-pad-home" variant="h3" marked="center" align="center" component="h2">
        Cannabis Testing Services
    </Typography>
      <Container overflow="hidden" className={classes.pillars}>
        <Typography align="center" variant="h5" className={classes.pillar}>
          Fast
        </Typography>
        <Divider orientation="vertical" className={classes.verticalDivider}/>
        <Typography align="center" variant="h5" className={classes.pillar}>
          Competetive
        </Typography>
        <Divider orientation="vertical" className={classes.verticalDivider}/>
        <Typography align="center" variant="h5" className={classes.pillar}>
          Accurate
        </Typography>
      </Container>
    <Paper elevation={4} square="true" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card raised="true" className={classes.item}>
              <TimeLapseIcon style={{fontSize:50}} className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Quick Turnaround
              </Typography>
              <Divider variant="fullWidth" className={classes.divider}/>
              <List>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Expedited sample pickup</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Test methods designed for high production</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Results available upon completion of analysis</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card raised="true" className={classes.item} style={{justifyContent:'center'}}>
              <Typography align="center" variant="h4" className={classes.title}>
                Competitive Pricing
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card raised="true" className={classes.item}>
              <AssignmentTurnedInIcon style={{fontSize:50}} className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                Accurate Results
              </Typography>
              <Divider variant="fullWidth" className={classes.divider}/>
              <List>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">California approved testing methods</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">Skilled staff</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    <Typography align="center" variant="subtitle1">New instrumentation</Typography>
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

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
