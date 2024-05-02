import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { useState } from "react";
import { uid } from "uid";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmit(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }
  function handleDeleteColor(id) {
    console.log(id);
    setColors(colors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleSubmit} />
      <br />

      {colors.map((color) => {
        return (
          <Color
            id={color.id}
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        );
      })}
      {colors.length === 0 && <p>No colors.. start by adding one!</p>}
    </>
  );
}

export default App;
