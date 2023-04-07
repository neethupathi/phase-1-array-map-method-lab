

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];


function titleCased()
{

const ti = tutorials.map(title => {
  if (title.includes(' ')) {

    let splittedArr = title.split(' ');
   // console.log(splittedArr);

    const newArr = splittedArr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1));

    return newArr.join(' ');
  }
  return title[0].toUpperCase() + title.slice(1);
});
//console.log(ti);
return ti;
}
