const Queue = () => {
  class node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class queue {
    first = null;
    last = null;

    add = (item) => {
      let addNode = new node(item);
      if (this.last != null) this.last.next = addNode;
      this.last = addNode;
      if (this.first == null) this.first = this.last;
    };

    remove = () => {
      if (this.first == null) {
        alert("Queue is Empty!");
        return false;
      }

      let val = this.first.val;
      this.first = this.first.next;
      if (this.first == null) this.last = null;
      return val;
    };

    peek = () => {
      if (this.first == null) {
        alert("Queue is Empty!");
        return false;
      }

      return this.first.val;
    };

    isEmpty = () => {
      return this.first == null;
    };
  }

  const test = new queue();

  while (1) {
    let mth = prompt("Enter your operator : 1. remove, 2. peek, 3.add");
    if (mth == "1") {
      alert(test.remove());
    } else if (mth == "2") {
      alert(test.peek());
    } else if (mth == "3") {
      let val = prompt("Enter your input : ");
      test.add(val);
    } else break;
  }
};

export default Queue;
