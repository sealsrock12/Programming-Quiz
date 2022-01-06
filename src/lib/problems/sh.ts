const shProblems: Problem[] = [
  {
    problem: `In Bash, which options declare a variable?
  1. \`foo=bar\`
  2. \`foo = "bar"\`
  3. \`foo="bar"\``,
    options: ["1 and 2 only", "1 only", "1 and 3 only", "All three"],
    answer: 2,
    solution:
      'Solution: The first case is valid. The second is invalid because of the spaces. \
This instead gets interpreted as running foo with the arguments ["=", "bar"] which is not what we desire. \
The third case is also valid as quotes are often optional in Bash.'
  },
  {
    problem: "In Bash, what is the `.bashrc` file?",
    options: [
      "A script that makes Bash work (located in `/bin`)",
      "A script that makes Bash work (located in `/usr/bin`)",
      "A shell script that runs every time you launch the terminal",
      "None of the above"
    ],
    answer: 2,
    solution:
      "The answer is (C). Located in `~/.bashrc`, this file is often used for variables, functions, aliases, etc. that we want to use in every shell instance."
  }
];

export default shProblems;
