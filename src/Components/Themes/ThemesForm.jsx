export default function ThemesForm({
  onAddTheme,
  currentTheme,
  onThemeChange,
  themes,
  onDeleteTheme,
  currentThemeId,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddTheme(data);
  }
  return (
    <form
      onSubmit={handleSubmit}
      value={currentThemeId}
      onChange={() => onThemeChange}
    >
      <select value={currentTheme}>
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      <button type="submit">ADD</button>
      <button>EDIT</button>
      <button onClick={() => onDeleteTheme(themes.id)}>DELETE</button>
    </form>
  );
}
