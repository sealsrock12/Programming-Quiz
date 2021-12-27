/**
 * Problems (obj)
 * key (str): programming language
 * value (obj): questions and choice
 */

import markup from "styles/Markup.module.scss";

const problems = {
  js: {
    // ...
    "What does `console.log()` do?": [
      [
        "Prints text on the site",
        "Prints text to the console",
        "Error message in the console",
        "None of the above"
      ],
      2,
      "`console.log()` prints text on to the console."
    ],

    // ...
    "We can declare a variable in JavaScript using `var`, `let`, and `const`. Which way lets us reassign it?":
      [
        ["var/let", "const/let", "let/var", "None of the above"],
        3,
        "`const` will make it a constant (un changeable). So it will be the other two."
      ],

    // ...
    "What are the four states of a JavaScript promise?": [
      [
        "Pending, Fulfilled, Rejected, Settled",
        "Pending, Finished, Rejected, Resolved",
        "Pending, Fulfilled, Denied, Settled",
        "Pending, Complete, Rejected, Resolved"
      ],
      1,
      "They are: `Pending, Fulfilled, Rejected, Settled`."
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
      1,
      "`print()` prints text in to the terminal. There is no window involved."
    ]
  }
};

export default problems;
