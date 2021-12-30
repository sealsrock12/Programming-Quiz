import problems from "@/lib/problems";

export function generator() {
  const lang = Math.floor(Math.random() * 2) == 0 ? "js" : "py";
  // https://stackoverflow.com/a/4550514/
  const id = Math.floor(Math.random() * problems[lang].length);

  return {
    lang,
    id,
    ...problems[lang][id]
  };
}
