//import { useState } from "react";

function ButtonRed() {
  // const [isClicked, setIsClicked] = useState(false);

  const onRedClick = () => {
    document.documentElement.style.setProperty("--main-bg-color", "darkred");
  };

  const onBlueClick = () => {
    document.documentElement.style.setProperty("--main-bg-color", "darkblue");
  };

  return (
    <div>
      <button className="red-button" onClick={onRedClick}>
        RED
      </button>
      <button className="blue-button" onClick={onBlueClick}>
        BLUE
      </button>
    </div>
  );
}

export default ButtonRed;
