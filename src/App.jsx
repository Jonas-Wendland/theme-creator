import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { uid } from "uid";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    if (newColor.id === undefined) {
      setColors([{ id: uid(), ...newColor }, ...colors]);
    } else {
      setColors([newColor, ...colors]);
    }
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleEditColor(colorEdit) {
    setColors(
      colors.map((color) => {
        if (color.id === colorEdit.id) return colorEdit;
        return color;
      })
    );
    console.log(colorEdit);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <br />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            id={color.id}
            onDeleteColor={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        );
      })}
      {colors.length === 0 && <p>No colors.. start by adding one!</p>}
    </>
  );
}

export default App;
