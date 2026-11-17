import { useEffect, useState } from "react";

export function useTypewriter(words: string[], { typeMs = 70, deleteMs = 35, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[index] ?? "");
      const t = setTimeout(() => setIndex((i) => (i + 1) % words.length), holdMs * 1.5);
      return () => clearTimeout(t);
    }
    const word = words[index] ?? "";
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs,
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}
