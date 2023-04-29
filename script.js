// ANS 1 :  1.Write a program to count duplicate characters.
// input - “adsjfdsfsfjsdjfhacabcsbajda”.
// output - { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

const inputString = "adsjfdsfsfjsdjfhacabcsbajda";

let storeDuplicates = {};

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === inputString[i]) {
    if (!!!storeDuplicates[inputString[i]]) {
      storeDuplicates[inputString[i]] = 1;
    } else {
      storeDuplicates[inputString[i]] += 1;
    }
  }
}

console.log(storeDuplicates);

// ANS 2 : 2.Write a program to reverse the letters and words.
//    Input: "I evol uoy os !hcum"
//    Output: I love you so much!

const inputStr = "I evol uoy os !hcum";

const reversedStrFun = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

const output = inputStr.split(" ").map((element) => reversedStrFun(element));
console.log(output.join(" "));

// ANS 3 : 3.Write a program for sum of 1 to n number using recursion.

const sumOfnNumbers = (num) => {
  if (num == 1) {
    return num;
  }
  return num + sumOfnNumbers(num - 1);
};

const input = parseInt(prompt("Enter the number : "));

console.log(
  `The sum of 1 to ${input} number using recursion : ${sumOfnNumbers(input)}`
);

// ANS 4 : 4.Write a program to sort an array using merge sort.

// merged array values as their place
function merged(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// merge sort
const mergeSort = (notSortedArray) => {
  if (notSortedArray.length <= 1) {
    return notSortedArray;
  }

  const mid = Math.floor(notSortedArray.length / 2);
  const left = notSortedArray.slice(0, mid);
  const right = notSortedArray.slice(mid);

  return merged(mergeSort(left), mergeSort(right));
};

const notSortedArray = [5, 4, 3, 2, 1];
console.log("Before Sorting Array : ", notSortedArray);
const sortedArray = mergeSort(notSortedArray);
console.log("After Sorting Array : ", sortedArray);

// ANS 5 :- Frontend-Challange -
//   Drag and Drop sortable list using html Css And Javascript

const items = document.querySelectorAll(".item");
const ul = document.querySelector("ul");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const sortList = (e) => {
  e.preventDefault();
  const draggingItem = ul.querySelector(".dragging");
  const siblings = [...ul.querySelectorAll(".item:not(.dragging)")];

  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  ul.insertBefore(draggingItem, nextSibling);
};

ul.addEventListener("dragover", sortList);
ul.addEventListener("dragend", (e) => e.preventDefault());
