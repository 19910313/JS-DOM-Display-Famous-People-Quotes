const button = document.getElementById("button");
const author = document.getElementById("author");
const quoteP = document.getElementById("quote");

button.addEventListener("click", runEvent);

function runEvent(e) {
  e.preventDefault();
  const authorQuotes = [
    {
      author: "- Goethe",
      quote: "Nimic nu valoreaza mai mult decat ziua de astazi.",
    },
    {
      author: "- Robert Frost",
      quote:
        "Tot ce am învățat despre viață pot să spun în 3 cuvinte: viața merge înainte.",
    },
    {
      author: "- Abraham Lincoln",
      quote: "Nu contează numărul anilor din viața ta, ci viața din anii tăi.",
    },
    {
      author: "- Mark Twain",
      quote: "Nu-ți visa viața, ci trăiește-ți visul.",
    },
    {
      author: "- Goethe",
      quote:
        "Imediat ce vei începe să ai încredere în tine însuți, vei știi cum să trăiești.",
    },
  ];
  let randomNumber = Math.floor(Math.random() * authorQuotes.length);
  author.innerHTML = `Author: ${authorQuotes[randomNumber].author}`;
  quoteP.innerHTML = `Famous Quote: ${authorQuotes[randomNumber].quote}`;
}
