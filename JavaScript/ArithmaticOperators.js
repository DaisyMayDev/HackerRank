// Arithmatic Operators Challenge:
// Calculate the area and perimeter of a rectangle

const length = 4;
const width = 9;

function getArea(length, width) {
  return length * width;
}

function getPerimeter(length, width) {
  return length * 2 + width * 2;
}

console.log(`The area of the rectangle is ${getArea(length, width)} and the perimeter is ${getPerimeter(length, width)}`);

//Output to console ->  The area of the rectangle is 36 and the perimeter is 26
