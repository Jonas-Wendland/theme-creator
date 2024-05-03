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
  return (
    <p className="color-contrast-rating">
      Overall contrast rating: {contrastScore}
    </p>
  );
}
