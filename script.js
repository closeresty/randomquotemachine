//   problem 
//   1. generate quotes
//   2. pano tatawagin ng button ko yung function na pang generate quotes
//   3. generate random quotes
//   4. san manggagaling yung data 
//   5. pag may data na ko dapat random yon
//   6. display quotes
const quotes = [
    {
      text: "Be the change you wish to see in the world.",
      author: " – Mahatma Gandhi"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: " – Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: " – Winston Churchill"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: " – Theodore Roosevelt"
    },
    {
      text: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: " – Oscar Wilde"
    },
    {
      text: "That it will never come again is what makes life so sweet.",
      author: " – Emily Dickinson"
    },
    {
      text: "It is never too late to be what you might have been.",
      author: " – George Eliot"
    },
    {
      text: "Pain is inevitable. Suffering is optional.",
      author: " – Haruki Murakami"
    },
    {
      text: "Be kind, for everyone you meet is fighting a hard battle.",
      author: " – Plato"
    },
    {
      text: "Let me live, love, and say it well in good sentences.",
      author: " – Sylvia Plath"
    },
    {
      text: "We are all broken, that's how the light gets in.",
      author: " – Ernest Hemingway"
    },
    {
      text: "Life is tough my darling, but so are you.",
      author: " – Stephanie Bennett Henry"
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: " – Thomas Edison"
    }
  ];
  
  function generateQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById("text").textContent = randomQuote.text;
    document.getElementById("author").textContent = randomQuote.author;
  }
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  document.getElementById("new-quote").addEventListener("click", function() {
    generateQuote();
  });
  document.getElementById("new-quote").addEventListener("click", function() {
    console.log("New quote button clicked!");
    generateQuote();

    // change background color
    const body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}






