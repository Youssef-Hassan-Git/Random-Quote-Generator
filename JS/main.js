
var quotes = [
    {
      quote: "Be yourself; everyone else is already taken",
      author: "--Oscar Wilde",
  },
   {
      quote: "Do not take life too seriously. You will not get out alive.",
      author: "--Elbert Hubbard",
   },
    {
      quote:"A room without books is like a body without a soul",
      author: "--Marcus Tullius Cicero",
    },
     {
      quote: "Be the change that you wish to see in the world",
      author: "--Mahatma Gandhi",
     },
     {
        quote: "It's not what happens to you, but how you react to it that matters.",
        author: "--Epictetus"
     }
    ];
  


function generateQuote(){
    var index = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML =  quotes[index].quote;
    document.getElementById("author").innerHTML = quotes[index].author;
}

// document.getElementById("demo").onclick = function(){
//     var index = Math.floor(Math.random() * quotes.length);
//     document.getElementById("quote").innerHTML =  quotes[index].quote;
//     document.getElementById("author").innerHTML = quotes[index].author;

// };




