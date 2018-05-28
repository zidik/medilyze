import React from 'react';
import Agent from './AgentExpansionPanel';

function boxMullerRandom () {
  let phase = false,
    x1, x2, w, z;

  return (function() {

    if (phase = !phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const agents = [
  {
    name: "Abby Adam",
    pulse: 86,
    oxygen : 97,
    movement: 58,
    pulse_data: randomData(100),
    oxygen_data: randomData(100),
    movement_data: randomData(100),
  },
  {
    name: "Derek Alan",
    pulse: 86,
    oxygen : 97,
    movement: 58,
    pulse_data: randomData(100),
    oxygen_data: randomData(100),
    movement_data: randomData(100),
  },
  {
    name: "Hazel Finlay",
    pulse: 86,
    oxygen : 97,
    movement: 58,
    pulse_data: randomData(100),
    oxygen_data: randomData(100),
    movement_data: randomData(100),
  },
  {
    name: "Cohen Nell",
    pulse: 86,
    oxygen : 97,
    movement: 58,
    pulse_data: randomData(100),
    oxygen_data: randomData(100),
    movement_data: randomData(100),
  },
  {
    name: "Bernie Kelvin",
    pulse: 86,
    oxygen : 97,
    movement: 58,
    pulse_data: randomData(100),
    oxygen_data: randomData(100),
    movement_data: randomData(100),
  },
  {
    name: "Darrel Leesa",
    pulse: 86,
    oxygen : 97,
    movement: 58,
    pulse_data: randomData(100),
    oxygen_data: randomData(100),
    movement_data: randomData(100),
  }
];
const GridExampleStackable = ({classes}) => (
    agents.map(agent => <Agent agent={agent} key={agent.name} />)
);

export default GridExampleStackable