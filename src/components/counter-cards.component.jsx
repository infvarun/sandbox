import React from "react";
import Counter from "./counter.component";

const CounterCards = props => {
  return (
    <React.Fragment>
      <Counter
        operator="+"
        operand="1"
        title="Increment by 1"
        size="col-sm-6"
      />

      <Counter operator="*" operand="2" title="Multiple of 2" size="col-sm-6" />
    </React.Fragment>
  );
};

export default CounterCards;
