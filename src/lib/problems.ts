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
        "We can declare a variable in JavaScript using `var`, `let`, and `const`. Which methods let us reassign the variable in the future?",
      options: ["var/let", "const/let", "const/var", "None of the above"],
      answer: 0,
      solution:
        "`const` will make it a constant (un-changeable). So it will be the other two."
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
      problem: "In Python, a function can take",
      options: [
        "0 parameters",
        "1 parameter",
        "2 parameters",
        "As many parameters as needed"
      ],
      answer: 3,
      solution:
        "A function may need more than two parameters based on \
    its aim, so using more than 2 parameters is allowed."
    },
    {
      problem: `Is this a valid python code?
~~~python
if 5 > 2:
  print("Five is greater than two!")
if 5 > 3:
        print("Five is greater than three!")
~~~`,
      options: ["Yes", "No"],
      answer: 0,
      solution:
        "This code can run correctly, hence the answer is (A). \
The thing is, you can have a different number of spaces as indents for each block of code, \
as long as each block of code has a consistent number of spaces for indents. \
If we look at the code, there are two blocks of code, the first having a one-space indent, \
and the second having an eight-space indent. Since both indents are consistent throughout their block, \
this code is perfectly valid."
    },
    {
      problem: `
Which of the following Python codes are valid?
~~~python
# Code one
x = 3
if 10 > x >= -1:
    print("x is less than ten, and greater than equal to negative one!")
# End code one

# Code two
x = 0;
if 10 > x >= -1:
    print("x is less than ten, and greater than equal to negative one!");
# End code two

# Code three
x = 0;
if 10 > x >= -1{
      print("x is less than ten, and greater than equal to negative one!");
}
# End code three
~~~`,
      options: ["Only 1", "1, 2", "2, 3", "All are valid"],
      answer: 1,
      solution:
        "Solution: As weird as it seems, codes one and two are both valid. \
Code one works as it follows python's syntax. Surprisingly, code two is also valid, \
as in python, you can use semicolons as separators, although there are not mandatory. \
Code three is incorrect as curly brackets were never a thing in python."
    }
  ],
  sh: [
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
  ],
  java: [
    {
      problem: `Fill in the blank: 
In Java, non-primitive data types are ________, and one example is a(n) ________.`,
      options: [
        '"predefined", "integer"',
        '"not predefined", "string"',
        '"predefined", "array"',
        "None of the above."
      ],
      answer: 1,
      solution:
        "Primitive types, like int or boolean, are immediately defined \
(in this case, 0 and false respectively), even if you haven't assigned a value to it. \
Likewise, non-primitive types, like string or array, are not immediately defined."
    }
  ]
};

export const langToNiceName: { [key: string]: string } = {
  js: "JavaScript",
  py: "Python",
  sh: "Shell",
  ccpp: "C/C++",
  java: "Java"
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
