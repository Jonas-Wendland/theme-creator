import { useState, useEffect } from "react";

export default function CopyToClipboard({ hexCode }) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(hexCode.hex);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  }
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <button onClick={copyToClipboard}>
        {copied ? "SUCCESFULLY COPIED!" : "Copy"}
      </button>
    </>
  );
}
