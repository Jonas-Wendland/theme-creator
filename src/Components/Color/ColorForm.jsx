import ColorInput from "./ColorInput";

export default function ColorForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
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
