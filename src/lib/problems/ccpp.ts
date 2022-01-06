const ccppProblems = [
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
];

export default ccppProblems;
