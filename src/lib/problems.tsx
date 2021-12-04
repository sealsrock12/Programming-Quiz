/**
 * Problems (obj)
 * key (str): programming language
 * value (obj): questions and choice
 */

import markup from "styles/Markup.module.scss";

const problems = {
  js: {
    "What does `console.log()` do?": [
      [
        "Prints text on the site",
        "Prints text to the console",
        "Error message in the console",
        "None of the above"
      ],
      "`console.log()` prints text on to the console."
    ]
  },
  py: {
    "What does `print()` do?": [
      [
        "Prints text to the terminal",
        "Prints text to the window",
        "Error message in the terminal",
        "None of the above"
      ],
      "`print()` prints text in to the terminal. There is no window involved."
    ]
  }
};

export default problems;
