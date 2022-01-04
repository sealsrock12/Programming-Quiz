import { LangType as _LangType } from "./problems";

declare global {
  type LangType = _LangType;
  type LangSettingType = LangType | "all";

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

  type ProblemList = {
    [lang in LangType]: Problem[];
  };
}
