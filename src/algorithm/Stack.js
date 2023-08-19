const Stack = () => {
  class node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class stack {
    top = null;

    pop = () => {
      if (this.top == null) {
        alert("Stack is Empty!");
        return false;
      }

      let item = this.top.val;
      this.top = this.top.next;
      return item;
    };

    push = (item) => {
      let addNode = new node(item);
      addNode.next = this.top;
      this.top = addNode;
    };

    peek = () => {
      if (this.top == null) {
        alert("Stack is Empty!");
        return false;
      }

      return this.top.val;
    };

    isEmpty = () => {
      return this.top == null;
    };
  }

  const test = new stack();

  while (1) {
    let mth = prompt("Enter your operator : 1. pop, 2. peek, 3.push");
    if (mth == "1") {
      alert(test.pop());
    } else if (mth == "2") {
      alert(test.peek());
    } else if (mth == "3") {
      let val = prompt("Enter your input : ");
      test.push(val);
    } else break;
  }
};

export default Stack;
