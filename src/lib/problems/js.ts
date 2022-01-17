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
      "`undefined` is when no value was assigned. `null` is when there is no value, but was purposely assigned by the code",
      "`undefined` is when no value was assigned. `null` is when there is no value, but was purposely assigned by the programer",
      "None of the above"
    ],
    answer: 2,
    solution:
      "`undefined` is when no value is assigned to something. The value will never be `null` unless the programmer explicity choose to make it that value. "
  },
  {
    problem: `What is the result of this code?

~~~javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
~~~`,
    options: ["20, null", "20, NaN", "20, 62.83185307179586", "20, 63"],
    answer: 1,
    solution: `Note that the value of \`diameter\` is a regular  function, whereas the value of \`perimeter\` is an arrow function. 

With arrow functions, the \`this\` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call \`perimeter\`, it doesn't refer to the shape object, but to its surrounding scope (window for example). 

There is no value \`radius\` on that object, which returns \`NaN\`.`
  },
  {
    problem: `What is the output?
~~~javascript
+true;
!'Lydia';
~~~`,
    options: [
      "`1` and `false`",
      "`false` and `NaN`",
      "`false` and `false`",
      "`true`, `false`"
    ],
    answer: 0,
    solution: `The unary plus tries to convert an operand to a number. true is 1, and false is 0.

The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.`
  },
  {
    problem: `Which one is true?
~~~javascript
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
~~~`,
    options: [
      "`mouse.bird.size` is not valid",
      "`mouse[bird.size]` is not valid",
      '`mouse[bird["size"]]` is not valid',
      "All of them are valid"
    ],
    answer: 0,
    solution: `In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not *type* them as strings, they are always converted into strings under the hood.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket \`[\` and keeps going until it finds the closing bracket \`]\`. Only then, it will evaluate the statement.

\`mouse[bird.size]\`: First it evaluates \`bird.size\`, which is \`"small"\`. \`mouse["small"]\` returns \`true\`.

However, with dot notation, this doesn't happen. \`mouse\` does not have a key called \`bird\`, which means that \`mouse.bird\` is \`undefined\`. Then, we ask for \`size\` using dot notation: \`mouse.bird.size\`. Since \`mouse.bird\` is \`undefined\`, we're actually asking \`undefined.size\`. This isn't valid, and will throw an error similar to \`Cannot read property "size" of undefined\`.`
  },
  {
    problem: `What is the output?
~~~javascript
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
~~~`,
    options: ["Hello", "Hey!", "undefined", "Reference Error"],
    answer: 0,
    solution: `In JavaScript, all objects interact by *reference* when setting them equal to each other.

First, variable \`c\` holds a value to an object. Later, we assign \`d\` with the same reference that \`c\` has to the object.

When you change one object, you change all of them.`
  }
];

export default jsProblems;
