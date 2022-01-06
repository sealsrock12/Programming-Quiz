const ccppProblems: Problem[] = [
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
      "Accessing memory out of bounds will cause the program to crash. Here, we're accessing a character \
past the last index (which is 'd')."
  },
  {
    problem: "In C, how do you get arguments in the command line?",
    options: [
      "Using the `getargs()` function",
      "Using the `argc` and `argv` parameters in main()",
      "Using the `args` vector in main",
      "Using the `optsc` and `optsv` parameters in main()"
    ],
    answer: 1,
    solution: `In the main function, you can use the \`argc\` and \`argv\` parameters in main() to get
the arguments. As the name suggests, \`argc\` is the number of arguments, and \`argv\` is an array of them.
Be careful, however, because argv[0] will be the path of the executable being called:
~~~clike
#include <stdio.h>

int main(int argc, char* argv[]) {
  for (int i = 0; i < argc; i++) {
    printf("%s\n", argv[i]);
  }
}
~~~`
  }
];

export default ccppProblems;
