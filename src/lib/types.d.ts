interface Problem {
  problem: string;
  options: string[];
  answer: number;
  solution: string;
}

interface ProblemList {
  [lang: string]: Problem[];
}
