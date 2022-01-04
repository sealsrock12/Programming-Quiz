import problems, { langToNiceName } from "@/lib/problems";

export function generator(previous?: PopulatedProblem) {
  const storedLang = localStorage.getItem("lang");

  let flatProblems: PopulatedProblem[] = [];
  let langKeys =
    localStorage.getItem("lang") && localStorage.getItem("lang") !== "null"
      ? [localStorage.getItem("lang")]
      : Object.keys(langToNiceName);

  langKeys.forEach(lang => {
    problems[lang!].forEach((problem, id) => {
      flatProblems.push({
        id,
        // @ts-ignore
        lang,
        ...problem
      });
    });
  });

  if (previous && flatProblems.includes(previous)) {
    const i = flatProblems.indexOf(previous);
    flatProblems.splice(i + 1);
  }

  const index = Math.floor(Math.random() * flatProblems.length);

  return flatProblems[index];
}
