import { useState } from "react";

function LandingTextBox() {
  const [name, setName] = useState("base");

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <h2>{name}</h2>
    </>
  );
}

export default LandingTextBox;
