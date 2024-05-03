import { useEffect, useState } from "react";

export default function ContrastChecker({ color }) {
  const [contrastScore, setContrastScore] = useState();

  useEffect(() => {
    async function postFetch(color) {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ colors: color }),
        }
      );
      const data = await response.json();
      setContrastScore(data.overall);
    }
    postFetch(color);
  });
  function handleBackgroundColor() {
    if (contrastScore === "Yup") {
      return "green";
    } else if (contrastScore === "Kinda") {
      return "yellow";
    } else if (contrastScore === "Nope") {
      return "red";
    }
  }

  return (
    <p
      style={{
        color: "black",
        backgroundColor: handleBackgroundColor(),
        display: "inline-flex",
      }}
    >
      Overall contrast rating: {contrastScore}
    </p>
  );
}
