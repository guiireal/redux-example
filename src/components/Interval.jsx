import React from "react";

import Card from "./Card";

import "./Interval.css";

export default (props) => (
  <Card title="Intervalo de Números" red>
    <div className="interval">
      <span>
        <strong>Mínimo: </strong>
        <input type="number" value={0} readOnly />
      </span>
      <span>
        <strong>Máximo: </strong>
        <input type="number" value={10} readOnly />
      </span>
    </div>
  </Card>
);
