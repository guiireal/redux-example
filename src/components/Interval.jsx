import React from "react";

import { connect } from "react-redux";

import Card from "./Card";
import { numMinChange, numMaxChange } from "../actions/actionNumber";

import "./Interval.css";

const interval = ({ min, max, numMinChange, numMaxChange }) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="interval">
        <span>
          <strong>Mínimo: </strong>
          <input
            type="number"
            value={min}
            onChange={(e) => numMinChange(e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input
            type="number"
            value={max}
            onChange={(e) => numMaxChange(e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ numbers: { min, max } }) => ({ min, max });
const mapDispatchToProps = (dispatch) => ({
  numMinChange(newNumber) {
    const action = numMinChange(newNumber);
    dispatch(action);
  },
  numMaxChange(newNumber) {
    const action = numMaxChange(newNumber);
    dispatch(action);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(interval);
