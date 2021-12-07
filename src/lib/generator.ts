import problems from "@/lib/problems";

export function randomProperty(obj) {
  const keys = Object.keys(obj);
  const val = (keys.length * Math.random()) << 0;
  return [keys[val], obj[keys[val]]];
}

export function generator() {
  const langProbs = randomProperty(problems)[1];
  const problemInfo = randomProperty(langProbs);

  const problem = problemInfo[0];
  const options = problemInfo[1][0];
  const answer = problemInfo[1][1];
  const solution = problemInfo[1][2];

  return {
    problem: problem,
    options: options,
    answer: answer,
    solution: solution
  };
}
