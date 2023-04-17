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
  findList(node, data) {
    if (data === node.data) {
      return node
    } else if (data < node.data) {
      if (node.left && node.left.data === data) {
        return node.left
      } else if (node.left) {
        return this.findList(node.left, data)
      } else {
        return null
      }
    } else {
      if (node.right && node.right.data === data) {
        return node.right
      } else if (node.right) {
        return this.findList(node.right, data)
      } else {
        return null
      }
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

  find(data) {
    if (this.main.data === data) {
      return this.main
    } else if (data < this.min()) {
      return null
    } else if (data > this.max()) {
      return null
    } else {
      return this.findList(this.main, data)
    }
  }

  


  remove(data) {
    const removeNode = (list, data) => {
      if (!list) {
        return null;
      }

      if (data === list.data) {
        if (!list.left && !list.right) {
          return null;
        }

        if (!list.left) {
          return list.right;
        }

        if (!list.right) {
          return list.left;
        }

        let templist = list.right;
        while (templist.left) {
          templist = templist.left;
        }

        list.data = templist.data;
        list.right = removeNode(list.right, templist.data);
        return list;
      } else if (data < list.data) {
        list.left = removeNode(list.left, data);
        return list;
      } else {
        list.right = removeNode(list.right, data);
        return list;
      }
    }

    this.main = removeNode(this.main, data);
  }

  min() {
    return this.findMin(this.main)
  }
  findMin(list) {
    if (list.left === null) {
      return list.tree
    } else {
      return this.findMin(list.left)
    }
  }

  max() {
    return this.findMax(this.main)
  }
  findMax(list) {
    if (list.right === null) {
      return list.data
    } else {
      return this.findMax(list.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};