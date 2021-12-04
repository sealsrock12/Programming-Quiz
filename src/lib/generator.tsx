import problems from "lib/problems";

export function randomProperty(obj) {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}

export function generator() {
  const problemInfo = randomProperty(problems);
  const problem = Object.keys(problemInfo)[0];
  const options = Object.values(problemInfo)[0][0];
  const solution = Object.values(problemInfo)[0][1];

  return {
    problem: problem,
    options: options,
    solution: solution
  };
}
