import problems from "@/lib/problems";

export function generator(previous?: PopulatedProblem) {
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

  if (previous && flatProblems.includes(previous)) {
    const i = flatProblems.indexOf(previous);
    flatProblems.splice(i + 1);
  }

  const index = Math.floor(Math.random() * flatProblems.length);

  return flatProblems[index];
}
