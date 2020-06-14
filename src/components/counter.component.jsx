import React, { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  //click handler
  const handleClick = () => {
    const expr = counter + "+" + props.operand;
    //console.log(eval(expr));
    setCounter(eval(expr));
  };

  return (
    <div className={props.size} style={{ marginTop: "4px" }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Initial Value: <strong>0</strong>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Operator:{" "}
            <strong>{props.operator}</strong>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Operand:{" "}
            <strong>{props.operand}</strong>
          </p>
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={handleClick}
          >
            {counter}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
