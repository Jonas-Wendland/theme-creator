import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm.jsx";
import { uid } from "uid";
import "./App.css";
// import useLocalStorageState from "use-local-storage-state";
import { initialThemes } from "./lib/themes.js";
import ThemesForm from "./Components/Themes/ThemesForm.jsx";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [themes, setThemes] = useState(initialThemes);
  const [currentThemeId, setCurrentThemeId] = useState("t1");

  const currentTheme = themes.find((theme) => theme.id === currentThemeId);
  const currentColors = currentTheme.colors.map((colorId) =>
    colors.find((color) => color.id === colorId)
  );

  function handleThemeChange(event) {
    setCurrentThemeId(event.target.value);
  }

  function handleAddThemes(newTheme) {
    if (newTheme.id === undefined) {
      setThemes([...themes, { id: uid(), ...newTheme }]);
    } else {
      setThemes([newTheme, ...themes]);
    }
  }

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

  function handleDeleteTheme(id) {
    setColors(themes.filter((theme) => theme.id !== id));
  }

  function handleEditColor(colorEdit) {
    setColors(
      colors.map((color) => {
        if (color.id === colorEdit.id) return colorEdit;
        return color;
      })
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ThemesForm
        currrentThemeId={currentThemeId}
        onAddTheme={handleAddThemes}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        themes={themes}
        onDeleteTheme={handleDeleteTheme}
      />
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
