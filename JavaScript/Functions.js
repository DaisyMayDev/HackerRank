// Functions:
// Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (factorial).


function factorial(n) {
  if (n >= 1 && n <= 10) {
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
  return n;
  }
}

console.log(factorial(5));

//Output to console ->  120
