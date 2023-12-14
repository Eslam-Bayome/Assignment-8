let button = document.querySelector("button");
let quoteContainer = document.querySelector("#quoteContainer");
let quoteOwner = document.querySelector("#quoteOwner");
let quoteArr = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    owner: "Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    owner: "Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    owner: "Frank Zappa",
  },
  {
    quote:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    owner: "J.K. Rowling",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.”",
    owner: " Andre Gide",
  },
];
let notEqual = 0;
button.addEventListener("click", function () {
  let randomQuote = Math.trunc(Math.random() * quoteArr.length);
  if (randomQuote === notEqual) {
    if (randomQuote === 0) {
      ++randomQuote;
    } else {
      --randomQuote;
    }
  }
  quoteContainer.textContent = quoteArr[randomQuote].quote;
  quoteOwner.textContent = `-- ${quoteArr[randomQuote].owner}`;

  notEqual = randomQuote;
});
