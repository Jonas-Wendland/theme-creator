import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor, id }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [hideDelete, setHideDelete] = useState(false);

  function handleConfirmDelete() {
    setShowConfirmDelete(true);
    setHideDelete(true);
  }

  function confirmDelete() {
    onDeleteColor(id);
    setShowConfirmDelete(false);
  }

  function confirmCancel() {
    setHideDelete(false);
    setShowConfirmDelete(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!hideDelete && (
        <button
          onClick={() => {
            handleConfirmDelete();
          }}
        >
          Delete
        </button>
      )}
      {showConfirmDelete && (
        <div className="color-card-highlight">
          Really Delete?
          <button onClick={() => confirmCancel()}>Cancel</button>
          <button onClick={() => confirmDelete(id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
