const jsProblems: Problem[] = [
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
];

export default jsProblems;
