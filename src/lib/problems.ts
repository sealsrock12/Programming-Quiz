export const langList = ["js", "py", "sh", "ccpp", "java"] as const;
export const langListString = langList.map(e => e.toString());
export type LangType = typeof langList[number];

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
    },
    {
      problem: `What is the result of this code?
      
~~~javascript
function test() {
  console.log(a);
  console.log(foo());
  
  var a = 1;
  function foo() {
    return 2;
  }
}

test();
~~~
`,
      options: ["undefined, 2", "1, 2", "1, undefined", "undefined, undefined"],
      answer: 0,
      solution:
        "Since `a` was defined *after* it was called, it returned `undefined`. However, functions in JS can be defined anywhere, so `foo()` returned `2`."
    },
    {
      problem: "What is the difference between `undefined` and `null`?",
      options: [
        "`undefined` completely the same as `null`",
        "`undefined` is when no value was assigned. `null` is when there is no value, but was puposely assigned by the code",
        "`undefined` is when no value was assigned. `null` is when there is no value, but was puposely assigned by the programer",
        "None of the above"
      ],
      answer: 2,
      solution:
        "`undefined` is when no value is assigned to something. The value will never be `null` unless the progammer explicity choose to make it that value. "
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
Which of the following Python snippets are valid?
~~~python
x = 3
if 10 > x >= -1:
    print("x is less than ten, and greater than equal to negative one!")
~~~
~~~python
x = 0;
if 10 > x >= -1:
    print("x is less than ten, and greater than equal to negative one!");
~~~
~~~python
x = 0;
if 10 > x >= -1{
      print("x is less than ten, and greater than equal to negative one!");
}
~~~`,
      options: ["Only (A)", "(A) and (B)", "(B) and (C)", "All three"],
      answer: 1,
      solution:
        "Solution: As weird as it seems, snippets one and two are both valid. \
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
        "None of the above"
      ],
      answer: 1,
      solution:
        "Primitive types, like int or boolean, are immediately defined \
(in this case, 0 and false respectively), even if you haven't assigned a value to it. \
Likewise, non-primitive types, like string or array, are not immediately defined."
    }
  ],
  ccpp: [
    {
      problem: "In C++, the difference between a vector and an array is...",
      options: [
        "Vectors are resizable",
        "Vectors have direction",
        "They're the same",
        "None of the above"
      ],
      answer: 0,
      solution:
        "Vectors can be resized, as opposed to arrays, where you must create a new array, allocate it in memory,  copy the contents over, and delete the old array."
    },
    {
      problem: `What is the output of this code?
~~~clike
#include <stdio.h>
int main(void) {
  char* str = "Hello World";
  printf("%c", str[11]);
  return 0;
}
~~~`,
      options: [
        "'d'",
        "No output",
        "Crash/Undefined behavior",
        "None of the above"
      ],
      answer: 2,
      solution:
        "The answer is (C), because accessing memory out of bounds will cause the program to crash. Here, we're accessing a character past the last index (which is 'd')."
    }
  ]
};

export const langToNiceName: { [key in LangType]: string } = {
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
