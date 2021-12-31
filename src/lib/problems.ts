const problems: ProblemList = {
  js: [
    {
      problem: "What does `console.log()` do?",
      options: [
        "Prints text on the site",
        "Prints text to the console",
        "Error message in the console",
        "None of the above"
      ],
      answer: 1,
      solution: "`console.log()` prints text on to the console."
    },
    {
      problem:
        "We can declare a variable in JavaScript using `var`, `let`, and `const`. Which way lets us reassign it?",
      options: ["var/let", "const/let", "const/var", "None of the above"],
      answer: 0,
      solution:
        "`const` will make it a constant (un changeable). So it will be the other two."
    },
    {
      problem: "What are the states of a JavaScript promise?",
      options: [
        "Pending, Finished, Rejected",
        "Pending, Fulfilled, Denied",
        "Pending, Fulfilled, Rejected",
        "Pending, Complete, Rejected"
      ],
      answer: 2,
      solution: "They are: Pending, Fulfilled, Rejected"
    },
    {
      problem: "Dummy js problem, the answer is 3",
      options: ["0", "1", "2", "3"],
      answer: 3,
      solution: "The answer is 3"
    }
  ],
  py: [
    {
      problem: "What does `print()` do?",
      options: [
        "Prints text to the terminal",
        "Prints text to the window",
        "Error message in the terminal",
        "None of the above"
      ],
      answer: 0,
      solution:
        "`print()` prints text in to the terminal. There is no window involved."
    },
    {
      problem: "Dummy py problem, the answer is 0",
      options: ["0", "1", "2", "3"],
      answer: 0,
      solution: "The answer is 0"
    },
    {
      problem: "Dummy py problem, the answer is 1",
      options: ["0", "1", "2", "3"],
      answer: 1,
      solution: "The answer is 1"
    },
    {
      problem: "Dummy py problem, the answer is 2",
      options: ["0", "1", "2", "3"],
      answer: 2,
      solution: "The answer is 2"
    }
  ]
};

export default problems;
