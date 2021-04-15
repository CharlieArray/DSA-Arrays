const item = 23;

const list = [
  0,
  1,
  3,
  5,
  7,
  9,
  12,
  16,
  19,
  21,
  23,
  25,
  27,
  30,
  32,
  35,
  38,
  40,
  45,
  48,
];

//last index position
console.log(list.length - 1);

function binarySearch(item, list) {
  let lowIdx = 0;
  let highIdx = list.length - 1;

  //check if guess is lower/higher than value
  while (lowIdx <= highIdx) {
    let result = [];
    let midIdx = Math.floor((highIdx - lowIdx) / 2);

    //check if guess == item
    if (item === list[midIdx]) {
        return result.push(guess);
    }

    //check if guess is higher than item
    if (list[midIdx] > item) {
      console.log("checking right side of array");
      midIdx = highIdx - 1
    }

    //check if guess is lower than item
    if (list[midIdx] < item) {
        console.log("checking left side of array");
        midIdx = lowIdx + 1
      }

    console.log("item", item);
    console.log(result);
  }
}

binarySearch(item, list);

function binarySearch2(list, item) {
  let startIdx = 0;
  let endIdx = list.length - 1;

  while (startIdx <= endIdx) {
    let mid = Math.floor((startIdx + endIdx) / 2);
    let guess = mid

    if (item === list[mid]) {
      console.log("item is", item)
      console.log("this is list[mid] aka value", list[mid])
      return console.log("Target was found at index " + mid);
    }
    if (item > list[mid]) {
      console.log("Searching the right side of Array");
      startIdx = mid + 1;
    }
    if (item < list[mid]) {
      console.log("Searching the left side of array");
      endIdx = mid - 1;
      console.log('guess is:', guess )

    } 
    
    else {
      console.log("Not Found this loop iteration. Looping another iteration.");
    }
  }

  console.log("Target value not found in array");
}

//binarySearch2(list,item)