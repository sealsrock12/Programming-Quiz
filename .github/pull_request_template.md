### Report a Problem

Thank you for making a pull request! If you are reporting a bug to a problem, please email us at `Programming-Quiz@outlook.com`, with the problem id and language (click `Report error` in [/play](https://programming-quiz.pages.dev/play)).

### Contribute a Problem (Please read carefully!)

If you would like to contribute a problem, please post a JavaScript object in the following format:

```javascript
{
  problem: "problem (see below for code blocks)",
  options: ["array of four (or two for true-false problems) options", "option 2", "option 3", "option 4]",
  answer: 0, // use an integer for the index of the correct problem, starting from 0. NOT the nth problem
  solution: "Explain your answer. Use backticks for multiline solutions. Please don't indent the lines other than the first one."
}
```

#### Code Inside Problems/Options/Solutions

We are using `Prism.js` for higlighting code. Make sure the value for your key you want code in is using backticks `` ` ``. Put the code block in a new line, with **no indents**. Put `~~~<programming language>` before the code, and `~~~` after it. See [here](https://prismjs.com/#supported-languages) for supproted languages. For one-line code blocks, simply surround the code using backticks `` ` ``. Escape them if the value already is using backticks. 

Here is an example problem with code blocks: 

```javascript
{
  problem: `What does this code print?

~~~javascript
const x = 1
const y = 2

console.log(x + y)
`,
  options: ["`3`", "`NaN`", "`False`", "None of the above"],
  answer: 0,
  solution: "It simply adds the values, thus the result is `3`."
}
```

Be sure you also include the **programming language**. We are looking for language-specific  problems, at different levels. 

Thank you for your contribution!