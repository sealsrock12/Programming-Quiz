import problems from "@/lib/problems";

export function generator() {
  let flatProblems: PopulatedProblem[] = [];
  Object.keys(problems).forEach(lang => {
    problems[lang].forEach((problem, id) => {
      flatProblems.push({
        id,
        lang,
        ...problem
      });
    });
  });

  const index = Math.floor(Math.random() * flatProblems.length);

  return flatProblems[index];
}
