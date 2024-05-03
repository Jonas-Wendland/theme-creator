import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm";
import CopyToClipboard from "../CopyToClipboard";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  function handleConfirmDelete() {
    if (confirmDelete === false) {
      setConfirmDelete(true);
    } else {
      setConfirmDelete(false);
    }
  }
  function handleExitEdit() {
    setShowEdit(false);
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
      <CopyToClipboard hexCode={color} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!confirmDelete && !showEdit && (
        <button
          onClick={() => {
            handleConfirmDelete();
          }}
        >
          Delete
        </button>
      )}
      {confirmDelete && (
        <div className="color-card-highlight">
          Really Delete?
          <button onClick={() => setConfirmDelete(false)}>Cancel</button>
          <button onClick={() => onDeleteColor(color.id)}>Delete</button>
        </div>
      )}
      {!showEdit && (
        <>
          <button onClick={() => setShowEdit(true)}>Edit</button>
        </>
      )}
      {showEdit && (
        <>
          <ColorForm
            onAddColor={onEditColor}
            showEdit={showEdit}
            initialData={color}
            onExitEdit={handleExitEdit}
          />
          <button onClick={() => setShowEdit(false)}>Cancel</button>
        </>
      )}
    </div>
  );
}
