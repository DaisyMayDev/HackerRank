// Data Types Challenge:
// Print to the console using variables of different data types using arithmatic operations and concatenation.

const secondInteger = `12`;
const secondDecimal = `4.32`;
const secondString = `is the best place to learn and practice coding!`;

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = 'HackerRank ';

  console.log(firstInteger + Number(secondInteger));
  console.log(firstDecimal + Number(secondDecimal));
  console.log(firstString + secondString);
}

performOperation(secondInteger, secondDecimal, secondString);

//Output in console ->  16 
//                      8.32
//                      HackerRank is the best place to learn and practice coding!
