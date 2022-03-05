function stackData() {
  let array = [];

  return {
    push(item) {
      return array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get lenght() {
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    },
  };
}

const lowerBodyStack = stackData();

lowerBodyStack.push("pants");
lowerBodyStack.push("shoes");

lowerBodyStack.pop();

console.log(lowerBodyStack.peek());
