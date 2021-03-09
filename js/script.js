/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
  quote: 'In my experience, there is no such thing as luck.',
  source: 'Obi Wan Kenobi',
  citation: 'Star Wars: A New Hope',
  year: 1977
},
{
  quote: 'Never tell me the odds.',
  source: 'Han Solo',
  citation: 'Star Wars: The Empire Strikes Back',
  year: 1980
},
{
  quote: 'Do or do not, there is no try.',
  source: 'Yoda',
  citation: 'Star Wars: The Empire Strikes Back',
  year: 1980,
  tags: "#yoda, #starwars"
},
{
  quote: 'Rebellions are built on hope.',
  source: 'Jyn Erso',
  citation: 'Rogue One: A Star Wars Story',
  year: 2016
},
{
  quote: 'Dear child, the belonging you seek is not behind you…it is ahead.',
  source: 'Maz Kanata',
  citation: 'Star Wars: Episode VII – The Force Awakens',
  year: 2015
},
{
  quote: 'Now, be brave, and don’t look back.',
  source: 'Shmi Skywalker',
  citation: 'Star Wars: Episode I – The Phantom Menace',
  year: 1999
},
{
  quote: 'Sometimes we must let go of our pride and do what is requested of us.',
  source: 'Padmé Amidala',
  citation: 'Star Wars: Episode II – Attack of the Clones',
  year: 2002
},
{
  quote: 'She was more interested in protecting the light than seeming like a hero.',
  source: 'Princess Leia',
  citation: 'Star Wars: Episode VIII – The Last Jedi',
  year: 2017
},
{
  quote: 'Train yourself to let go of everything you fear to lose.',
  source: 'Yoda',
  citation: 'Star Wars: Episode V – The Empire Strikes Back',
  year: 1980,
  tags: "#yoda, #starwars"
}
];

// console.log(quotes);
// **Checked the console to make sure there were no bugs in my Array.

/*******/

/***
 * `getRandomQuote` function
***/

function getRandomQuote() { //Creates the getRandomQuote function
  const randomQuote = Math.floor(Math.random() * quotes.length); //Creates a variable that stores a random number from the index of the array.
  return quotes[randomQuote]; //Returns a random quote object.
}

// console.log(getRandomQuote);
// **Checked the console to make sure my function was working properly.


/***
 * `printQuote` function
***/

function printQuote() { //Creates the printQuote function.
  const grabQuote = getRandomQuote(); //Creates variable to call the getRandomQuote function.
  let quoteHtml = `<p class="quote">${grabQuote.quote}</p>
                   <p class="source">${grabQuote.source}`;

  if (grabQuote.citation) {
  quoteHtml += `<span class="citation">${grabQuote.citation}</span>`;
}

  if (grabQuote.year) {
  quoteHtml += `<span class="year">${grabQuote.year}</span>`;
}
  if (grabQuote.tags) {
  quoteHtml += `<span class="year">${grabQuote.tags}</span>`;

}
`</p>`

//Above code created a variable to store the HTML string in quoteHtml.

document.getElementById('quote-box').innerHTML = quoteHtml; //Sets the printQuote function to return the HTML string.

};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

