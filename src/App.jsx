import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { useState } from "react";
import { uid } from "uid";
import "./App.css";

function App() {
  const [color, setColor] = useState(initialColors);

  function handleSubmit(newColor) {
    setColor([{ id: uid(), ...newColor }, ...color]);
    console.log(newColor);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleSubmit} />
      <br />

      {color.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
