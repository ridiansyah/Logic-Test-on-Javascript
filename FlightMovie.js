function findMoviePair(movies, flightTime) {
  // Sort the movies array in ascending order
  movies.sort((a, b) => a - b);

  // Use two pointers, left and right, to iterate through the sorted movies array
  let left = 0;
  let right = movies.length - 1;

  while (left < right) {
    const currentSum = movies[left] + movies[right];

    // If the current sum is equal to the flight time, return true
    if (currentSum === flightTime) {
      return true;
    } else if (currentSum < flightTime) {
      // If the current sum is less than the flight time, move the left pointer forward
      left++;
    } else {
      // If the current sum is greater than the flight time, move the right pointer backward
      right--;
    }
  }

  // If no pair is found, return false
  return false;
}

// Sample movies and flight time
const movies = [1, 7, 3, 4];
const flightTime = 7;

console.log(findMoviePair(movies, flightTime));
