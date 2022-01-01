import problems from "@/lib/problems";

export function generator() {
  const langList = Object.keys(problems);
  const lang = langList[Math.floor(Math.random() * langList.length)];
  // https://stackoverflow.com/a/4550514/
  const id = Math.floor(Math.random() * problems[lang].length);

  return {
    lang,
    id,
    ...problems[lang][id]
  };
}
