import React, { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  //click handler
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <button type="button" className="btn btn-primary btn-lg btn-block">
      Block level button
    </button>
  );
}

export default Counter;
