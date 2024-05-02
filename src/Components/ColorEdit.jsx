import ColorInput from "./Color/ColorInput";

export default function ColorEdit({ onEditColor }) {
  function handleEditColor(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onEditColor(data);
  }

  return (
    <form onSubmit={handleEditColor}>
      <label htmlFor="role">
        Role
        <br />
        <input
          id="role"
          name="role"
          type="text"
          defaultValue="Color role"
        ></input>
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <ColorInput id="hex" defaultValue="#000000" />
      </label>
      <label htmlFor="contrast">
        Contrast text
        <ColorInput id="contrastText" defaultValue="#abcdef" />
      </label>
      <button>Add Color</button>
    </form>
  );
}
