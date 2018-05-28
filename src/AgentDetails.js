import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve,  SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const DataRow = ({label, current, historical}) =>
  <TableRow>
    <TableCell component="th" scope="row">{label}</TableCell>
    <TableCell numeric>{current}</TableCell>
    <TableCell numeric>
      <Sparklines data={historical} width={100}>
        <SparklinesLine style={{ stroke: "#2991c8", fill: "none"}} />
        <SparklinesSpots />
        <SparklinesNormalBand style={{ fill: "#2991c8", fillOpacity: .1 }} />
      </Sparklines>
    </TableCell>
  </TableRow>;

function SimpleTable(props) {
  const { classes, agent } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          <DataRow label="Pulse" current={agent.pulse} historical={agent.pulse_data} />
          <DataRow label="Blood Oxydation" current={agent.oxygen} historical={agent.oxygen_data} />
          <DataRow label="Pulse" current={agent.movement} historical={agent.movement_data} />
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);