import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const generateRandomNumbers = (min, max) =>
  Math.floor(Math.random() * max + min);

const sort = ({ min, max }) => (
  <Card title="Sorteio dos números" purple>
    <div>
      <span>
        <span>
          Resultado: <strong>{generateRandomNumbers(min, max)}</strong>
        </span>
      </span>
    </div>
  </Card>
);

const mapStateToProps = ({ numbers: { min, max } }) => ({ min, max });

export default connect(mapStateToProps)(sort);
