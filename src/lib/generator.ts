import problems, { langList, problemProperties } from "@/lib/problems";

/* 
  For developing problems.
  The program will generate the last object in lib/problems/<lang>.ts
*/
const PROBLEM_LOCK: LangType | null = null;

export function generator(
  problemType: LangSettingType,
  previous?: PopulatedProblem
): PopulatedProblem {
  if (PROBLEM_LOCK && problems[PROBLEM_LOCK].length > 0) {
    const newProblem: Problem = problems[PROBLEM_LOCK].at(-1)!;
    return {
      id: -1,
      lang: PROBLEM_LOCK,
      ...newProblem
    };
  }

  let flatProblems: PopulatedProblem[] = [];
  let langKeys: LangType[] = langList.map(e => e);

  if (problemType != "all") {
    langKeys = [problemType];
  }

  langKeys.forEach(lang => {
    problems[lang!].forEach((problem, id) => {
      flatProblems.push({
        id,
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
