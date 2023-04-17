const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(n) {
    this.tree = n;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.main = null
  }

  insert(main, list) {
    if (list.tree < main.tree) {
      return (main.left === null) ? main.left = list : this.insert(main.left, list)
    } else {
      return (main.right === null) ? main.right = list : this.insert(main.right, list)
    }
  }

  root() {
    return this.main
  }

  add(data) {
    let list = new Node(data)
    if (this.main === null) {
      this.main = list
    } else {
      this.insert(this.main, list);
    }
  }

  has(data) {
    if (this.main.data === data) {
      return true
    } else if (this.find(data) === null) {
      return false
    } else {
      return true
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};