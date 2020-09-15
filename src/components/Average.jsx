import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const average = ({ min, max }) => (
  <Card title="Média dos Números" green>
    <div>
      <span>
        <span>
          Resultado: <strong>{(max + min) / 2}</strong>
        </span>
      </span>
    </div>
  </Card>
);

const mapStateToProps = ({ numbers: { min, max } }) => ({
  min,
  max,
});

export default connect(mapStateToProps)(average);
