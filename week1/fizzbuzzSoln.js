// use this template for your fizzbuzz code

function fizzbuzz(numbers) {
  // assume numbers is an array of integers.  fizzbuzz should return a new
  // array where multiples of 3s and 5s become "Fizz" "Buzz" or "FizzBuzz"
  // using numbers.map()
  let updatedNumbers = numbers.map(num => {
    // note num is a multiple of 3 and 5 if and only if num is multiple
    // of 15 (property of relatively prime numbers)
    if (num % 15 == 0) {
      return "FizzBuzz";
    }
    if (num % 3 == 0) {
      return "Fizz";
    }
    if (num % 5 == 0) {
      return "Buzz";
    }
    return num;
  });

  return updatedNumbers;
}

// here's a test case to see if you got it right
// DON'T CHANGE THIS
function test() {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
  let updatedArray = fizzbuzz(arr);
  updatedArray.forEach(element => {
    console.log(element);
  });
}

test();
