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
  },
  {
    problem: `~~~javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
~~~`,
    options: [
      `\`true\` \`false\` \`true\``,
      `\`false\` \`false\` \`true\``,
      `\`true\` \`false\` \`false\``,
      `\`false\` \`true\` \`true\``
    ],
    answer: 2,
    solution: `\`new Number()\` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

When we use the \`==\` operator, it only checks whether it has the same _value_. They both have the value of \`3\`, so it returns \`true\`.

However, when we use the \`===\` operator, both value _and_ type should be the same. It's not: \`new Number()\` is not a number, it's an **object**. Both return \`false.\``
  },

  {
    problem: `~~~javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
~~~`,
    options: [
      `\`true\` \`false\` \`true\``,
      `\`false\` \`false\` \`true\``,
      `\`true\` \`false\` \`false\``,
      `\`false\` \`true\` \`true\``
    ],
    answer: 2,
    solution: `\`new Number()\` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

When we use the \`==\` operator, it only checks whether it has the same _value_. They both have the value of \`3\`, so it returns \`true\`.

However, when we use the \`===\` operator, both value _and_ type should be the same. It's not: \`new Number()\` is not a number, it's an *object*. Both return \`false.\``
  },
  {
    problem: `What is the output?
  
  ~~~javascript
  class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
  
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' });
  console.log(freddie.colorChange('orange'));
  ~~~`,
    options: [`\`orange\``, `\`purple\``, `\`green\``, `\`TypeError\``],
    answer: 3,
    solution: `The \`colorChange\` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since \`freddie\` is an instance of class Chameleon, the function cannot be called upon it. A \`TypeError\` is thrown.`
  },
  {
    problem: `What is the output?

~~~javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
~~~`,
    options: [`\`orange\``, `\`purple\``, `\`green\``, `\`TypeError\``],
    answer: 3,
    solution: `The \`colorChange\` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since \`freddie\` is an instance of class Chameleon, the function cannot be called upon it. A \`TypeError\` is thrown.`
  },

  {
    problem: `What is the output?

~~~javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
~~~`,
    options: [
      `\`{}\``,
      `\`ReferenceError: greetign is not defined\``,
      `\`undefined\``
    ],
    answer: 0,
    solution: `It logs the object, because we just created an empty object on the global object! When we mistyped \`greeting\` as \`greetign\`, the JS interpreter actually saw this as \`global.greetign = {}\` (or \`window.greetign = {}\` in a browser).

In order to avoid this, we can use \`"use strict"\`. This makes sure that you have declared a variable before setting it equal to anything.`
  },

  {
    problem: `What happens when we do this?

~~~javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
~~~`,
    options: [
      `Nothing, this is totally fine!`,
      `\`SyntaxError\`. You cannot add properties to a function this way.`,
      `\`"Woof"\` gets logged.`,
      `\`ReferenceError\``
    ],
    answer: 0,
    solution: `This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.`
  },

  {
    problem: `What is the output?

~~~javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return \`\${this.firstName} \${this.lastName}\`;
};

console.log(member.getFullName());
~~~`,
    options: [
      `\`TypeError\``,
      `\`SyntaxError\``,
      `\`Lydia Hallie\``,
      `\`undefined\` \`undefined\``
    ],
    answer: 0,
    solution: `In JavaScript, functions are objects, and therefore, the method \`getFullName\` gets added to the constructor function object itself. For that reason, we can call \`Person.getFullName()\`, but \`member.getFullName\` throws a \`TypeError\`. 

If you want a method to be available to all object instances, you have to add it to the prototype property:

~~~javascript
Person.prototype.getFullName = function() {
  return \`\${this.firstName} \${this.lastName}\`;
};
~~~`
  },

  {
    problem: `What's the output?

~~~javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
~~~`,
    options: [
      `\`Person {firstName: "Lydia", lastName: "Hallie"}\` and \`undefined\``,
      `\`Person {firstName: "Lydia", lastName: "Hallie"}\` and \`Person {firstName: "Sarah", lastName: "Smith"}\``,
      `\`Person {firstName: "Lydia", lastName: "Hallie"}\` and \`{}\``,
      `\`Person {firstName: "Lydia", lastName: "Hallie"}\` and \`ReferenceError\``
    ],
    answer: 0,
    solution: `For \`sarah\`, we didn't use the \`new\` keyword. When using \`new\`, \`this\` refers to the new empty object we create. However, if you don't add \`new\`, \`this\` refers to the **global object**!

We said that \`this.firstName\` equals \`"Sarah"\` and \`this.lastName\` equals \`"Smith"\`. What we actually did, is defining \`global.firstName = 'Sarah'\` and \`global.lastName = 'Smith'\`. \`sarah\` itself is left \`undefined\`, since we don't return a value from the \`Person\` function.`
  },
  {
    problem: `What are the three phases of event propagation?`,
    options: [
      `Target &gt; Capturing &gt; Bubbling`,
      `Bubbling &gt; Target &gt; Capturing`,
      `Target &gt; Bubbling &gt; Capturing`,
      `Capturing &gt; Target &gt; Bubbling`
    ],
    answer: 3,
    solution: `During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.

![image](/img/js-18.png)

`
  },
  {
    problem: `True or false: All object have prototypes.`,
    options: [`True`, `False`],
    answer: 1,
    solution: `All objects have prototypes, except for the *base object*. The base object is the object created by the user, or an object that is created using the \`new\` keyword. The base object has access to some methods and properties, such as \`.toString\`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.
  `
  }
];

export default jsProblems;
