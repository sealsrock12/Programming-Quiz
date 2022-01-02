interface Problem {
  problem: string;
  options: string[];
  answer: number;
  solution: string;
}

interface PopulatedProblem extends Problem {
  id: number;
  lang: string;
}

interface ProblemList {
  [lang: string]: Problem[];
}
