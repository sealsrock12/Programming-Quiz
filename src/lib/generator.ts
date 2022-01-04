import { AppContext } from "@/components/AppProvider";
import problems, { langList, langToNiceName } from "@/lib/problems";
import { useContext } from "react";

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

  if (previous && flatProblems.includes(previous)) {
    const i = flatProblems.indexOf(previous);
    flatProblems.splice(i + 1);
  }

  const index = Math.floor(Math.random() * flatProblems.length);

  return flatProblems[index];
}
