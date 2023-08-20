import { useState } from "react";

const onRedClick = () => console.log();
function ButtonRed() {
  return (
    <>
      <button className="red-button" onClick={onRedClick}>
        RED
      </button>
      <button className="blue-button">BLUE</button>
    </>
  );
}

export default ButtonRed;
