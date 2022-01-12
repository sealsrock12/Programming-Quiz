const pyProblems: Problem[] = [
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
  },
  {
    problem: "What does the asterisk unary operator (*) do in Python?",
    options: [
      "It takes the product of an array",
      "It takes the sum of an array",
      "It de-references a value",
      "It unpacks a value"
    ],
    answer: 3,
    solution:
      "The operator will unpack a list or tuple. For more details, \
see [here](https://www.w3schools.com/python/python_tuples_unpack.asp)."
  }
];

export default pyProblems;
