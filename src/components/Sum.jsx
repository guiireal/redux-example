import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const sum = ({ min, max }) => (
  <Card title="Soma dos Números" blue>
    <div className="interval">
      <span>
        <span>
          Resultado: <strong>{Number(min) + Number(max)}</strong>
        </span>
      </span>
    </div>
  </Card>
);

const mapStateToProps = ({ numbers: { min, max } }) => ({ min, max });
export default connect(mapStateToProps)(sum);
