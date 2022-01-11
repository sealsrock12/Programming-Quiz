import problems, { langList, problemProperties } from "@/lib/problems";

export function generator(
  problemType: LangSettingType,
  previous?: PopulatedProblem
) {
  let flatProblems: PopulatedProblem[] = [];
  let langKeys: LangType[] = langList.map(e => e);

  if (problemType != "all") {
    langKeys = [problemType];
  }

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

  if (previous) {
    flatProblems = flatProblems.filter(
      e => e.lang !== previous.lang || e.id !== previous.id
    );
  }

  const index = Math.floor(Math.random() * flatProblems.length);

  // Problem Properties
  console.log(problemProperties);

  return flatProblems[index];
}
