const shProblems: Problem[] = [
  {
    problem: `Which options declare a variable?
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
    problem: "Which option has a valid if statement",
    options: [
      `
~~~shell
NAME="Bob"

if [$NAME == "Bob"]
then
  echo "Your name is Bob"
fi
~~~`,
      `
~~~shell
NAME="Bob"

if [ $NAME == "Bob" ]
then
  echo "Your name is Bob"
fi
~~~`,
      `
~~~shell
NAME="Bob"

if [$NAME == "Bob"]
then
  echo "Your name is Bob"
~~~`,
      `
~~~shell
NAME="Bob"

if [ $NAME == "Bob" ]
then
  echo "Your name is Bob"
~~~`
    ],
    answer: 1,
    solution: ""
  }
];

export default shProblems;
