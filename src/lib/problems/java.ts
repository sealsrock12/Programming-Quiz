const javaProblems: Problem[] = [
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
  },
  {
    problem: `What is the output of the following Java code?
~~~java
public class Test {
  public static void main(String[] args) {
    int a = 1, int b = 2;
    System.out.println(b + " " + a);
  }
}~~~`,
    options: ["1 2", "2 1", "Compilation (`javac`)", "Execution (`java`)"],
    answer: 2,
    solution: `
When we try to compile this code with, we get:
~~~java
$ javac Test.java
Test.java:5: error: <identifier> expected
int a = 1, int b = 2;
~~~
This is because we don't need to use the second \`int\` keyword there,
because variable definitions in the same statement should have the same type.
If we remove it, the code executes successfully and we get \`2 1\`.
`
  },
  {
    problem: "What are interfaces in Java?",
    options: [
      "Structures containing methods that can be shared across classes",
      "A format for data structure types to be stored",
      "Classes that other classes extend",
      "A way for the Java program to communicate with the operating system"
    ],
    answer: 0,
    solution: `Interfaces are structures that contain methods that can be shared accross classes. 
In an ideal OOP design, the only way objects can communicate outside of themselves
is through methods. You can \`implement\` an interface in a class to add these shared
methods to them. Obviously, from the name, they are used to *interface* with other objects,
so their methods are always public and the classes that interface them also become public
(though they have private methods in them).`
  }
];

export default javaProblems;
