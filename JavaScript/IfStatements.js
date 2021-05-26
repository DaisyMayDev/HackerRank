// If Statements Challenge:
// Practice using If Statements

const score = 17;

function getGrade(score) {
  let grade;

  if (score > 25 && score <= 30) {
    grade = `A`;
  } else if (score > 20 && score <= 25) {
    grade = `B`;
  } else if (score > 15 && score <= 20) {
    grade = `C`;
  } else if (score > 10 && score <= 15) {
    grade = `D`;
  } else if (score > 5 && score <= 10) {
    grade = `E`;
  } else if (score >= 0 && score <= 10) {
    grade = `F`;
  } else {
    grade = `: Not Valid`;
  }

  return grade;
}

console.log(`The score ${score} gets the grade ${getGrade(score)}`);

//Output to console ->  The score 17 gets the grade C
