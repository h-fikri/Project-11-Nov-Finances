document.write("This is From Javascript using 'document.write()'");
/*
To find the median number from a set of numbers in JavaScript, you can first sort the array of numbers in ascending order. Then, if the array has an odd number of elements, the median will be the middle element of the array. If the array has an even number of elements, the median will be the average of the two middle elements.

Here is an example of how you can find the median number from an array of numbers in JavaScript:


*/
function findMedian(numbers) {
  // Sort the numbers in ascending order
  numbers.sort((a, b) => a - b);

  // If the array has an odd number of elements, the median will be the middle element
  if (numbers.length % 2 !== 0) {
    return numbers[Math.floor(numbers.length / 2)];
  }

  // If the array has an even number of elements, the median will be the average of the two middle elements
  return (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
}

/*
To use this function, you can pass in an array of numbers and the function will return the median number. For example:
*/

let numbers = [1, 2, 3, 4, 5];
let median = findMedian(numbers); // Median is 3

numbers = [1, 2, 3, 4];
median = findMedian(numbers); // Median is 2.5

/*
Remember that you can use this function to find the median of any set of numbers, not just arrays. You can also modify the function to handle other data types, such as floating-point numbers, if needed.

*/

console.log("Financial Analysis");
console.log("------------------");
console.log("Total:");
console.log("Average Change:");
console.log("Greatest Increase in Profits:");
console.log("Greatest Decrease in Profits:");
