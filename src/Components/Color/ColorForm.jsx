import ColorInput from "./ColorInput";

export default function ColorForm({
  onAddColor,
  showEdit,
  initialData,
  onExitEdit,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (showEdit) {
      data.id = initialData.id;
    }
    onAddColor(data);

    if (showEdit) {
      onExitEdit();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          id="role"
          name="role"
          type="text"
          defaultValue={initialData ? initialData.role : "Color Role"}
        ></input>
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <ColorInput
          id="hex"
          defaultValue={initialData ? initialData.hex : "#000000"}
        />
      </label>
      <label htmlFor="contrast">
        Contrast text
        <ColorInput
          id="contrastText"
          defaultValue={initialData ? initialData.contrastText : "#abcdef"}
        />
      </label>
      <button type="submit"> {showEdit ? "Update Color" : "Add Color"}</button>
    </form>
  );
}
