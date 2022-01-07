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
  },
  {
    problem: "How do you get arguments from a shell script?",
    options: [
      "Using `$1`, `$2`, `$3` ... `$9`, `$10`",
      "Using `$1`, `$2`, `$3` ... `${9}`, `${10}`",
      "Using `{1}`, `{2}`, `{3}` ... `{9}`, `{10}`",
      "Using `$0`, `$1`, `$2` ... `$9`, `${10}`"
    ],
    answer: 1,
    solution:
      "The answer is (B). We use the dollar signs to reference the `n`th variable. \
        It must be surrounded in braces if it is over 10. In addition, $0 returns the \
        name of the file being called, so it is not an argument."
  },
  {
    problem: "What is the difference between `.bashrc` and `.bash_profile`?",
    options: [
      "`.bash_profile` is information about the terminal, `.bashrc` is a file that is executed for every terminal instance",
      "`.bash_profile` is for the system, `.bashrc` is for the user",
      "`.bash_profile` is executed for interactive shells, while `.bashrc` is executed for login shells",
      "`.bash_profile` is executed for login shells, while `.bashrc` is executed for interactive shells"
    ],
    answer: 3,
    solution: `When you login (type username and password) via console, either sitting at the machine, or remotely via ssh: \`.bash_profile\` is executed to configure your shell before the initial command prompt.

But, if you've already logged into your machine and open a new terminal window (xterm) then \`.bashrc\` is executed before the window command prompt. \`.bashrc\` is also run when you start a new bash instance by typing \`/bin/bash\` in a terminal.

Source: [https://apple.stackexchange.com/a/51038/441471](https://apple.stackexchange.com/a/51038/441471)`
  }
];

export default shProblems;
