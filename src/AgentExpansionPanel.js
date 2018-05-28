import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from "@material-ui/core/Avatar";
import AgentDetails from "./AgentDetails";

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',


  },
});


class NestedList extends React.Component {


  render() {
    const { classes, agent } = this.props;

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <Avatar>{agent.name.split(' ').map(name=> name[0]).join('')}</Avatar>
          <Typography className={classes.heading}>{agent.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AgentDetails agent={agent}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);