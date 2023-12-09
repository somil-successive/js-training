// Write a program to sort an array (bubble sort)

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

const sortedArray = bubbleSort([5, 4, 3, 2, 1]);
console.log("Sorted array is : " + sortedArray);
