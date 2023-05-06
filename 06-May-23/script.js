const a = [0, 1, 2, 0, 1, 2];

// sort with optional comparison function
// a.sort((a, b) => {
//   return a - b;
// });

// array sort using bubble sort
// const bubbleSort = (arr) => {
//   const length = arr.length;
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = 0; j < length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log("Sorted Array...", a);
// console.log("Sorted Array...", bubbleSort(a));

// stack implementation
const stack = [];
let top = -1;

const stackPush = (element) => {
  top++;
  stack[top] = element;
};

const stackPop = () => {
  if (top === -1) {
    console.log("Element can't be popped Stack underflow");
    return;
  }
  stack.pop();
  top -= 1;
};

const stackIsEmpty = () => {
  if (top === -1) {
    console.log("Stack is Empty");
    return;
  }
  console.log("Stack is not Empty");
};

const stackPeek = () => {
  if (top === -1) {
    console.log("Stack underflow");
    return;
  }
  console.log(stack[top]);
};

stackIsEmpty();
stackPush(4);
stackPush(5);
stackPush(6);
stackPop();
stackPeek();
stackIsEmpty();
console.log("Stack all elements", stack);
