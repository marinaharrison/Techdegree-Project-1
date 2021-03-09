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
  year: 1980
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
}
];

// console.log(quotes);
// Checked the console to make sure there were no bugs in my Array.


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote]; 
}

console.log(getRandomQuote);


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

console.log('test');