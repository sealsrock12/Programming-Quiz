export const langList = ["js", "py", "sh", "ccpp", "java"] as const;
export const langListString = langList.map(e => e.toString());
export type LangType = typeof langList[number];

// import problems by lang
import jsProblems from "./js";
import pyProblems from "./py";
import shProblems from "./sh";
import javaProblems from "./java";
import ccppProblems from "./ccpp";

const problems: ProblemList = {
  js: jsProblems,
  py: pyProblems,
  sh: shProblems,
  java: javaProblems,
  ccpp: ccppProblems
};

export const langToNiceName: { [key in LangType]: string } = {
  js: "JavaScript",
  py: "Python",
  sh: "Shell",
  java: "Java",
  ccpp: "C/C++"
};

// Can't find a better way to do this
export const indexToAlpha: { [key: number]: string } = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G"
};

export default problems;
