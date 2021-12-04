export default function Meta({ page }) {
  let title;
  if (page) {
    title = `${page} | Programming Quiz`;
  } else {
    title = `Programming Quiz`;
  }

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta
        name="keywords"
        content="quiz, program, programming, code, coding, js, javascript, py, python, bypasspsace, sealsrock12"
      />
      <meta
        name="description"
        content="Test your knowledge on different programming languages!"
      />

      <meta
        property="og:image"
        content="https://programming-quiz.toad39.dev/programming-img.png"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Test your knowledge on different programming languages!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://programming-quiz.toad39.dev/" />

      <link rel=" icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

      <title>{title}</title>
    </head>
  );
}
