//BalancedBinaryTree.js
//https://leetcode.com/problems/balanced-binary-tree/

//Balanced Binary Tree - Difference between height of left node and right node is not more than one.
//A height balanced binary tree is a binary tree in which the height of the left subtree and right subtree of any node
//does not differ by more than 1 and both the left and right subtree are also height balanced.

function isBalanced(root) {
    if (!root) return true;

    const maxDepth = (node) => {
        if (!node) return 0;
        else return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    }

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.abs(left - right) <= 1 && isBalanced(root.left) === true && isBalanced(root.right) === true;
}

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// let Node15 = new Node(15);
// let Node7 = new Node(7);
// let Node20 = new Node(2, Node15, Node7);
// let Node9 = new Node(9);
// let root = new Node(4, Node9, Node20);

let Node5 = new Node(5);
let Node4 = new Node(4);
let Node3 = new Node(3, Node4, Node5);
let Node6 = new Node(6);
let Node2 = new Node(2, Node3, Node6);
let Node9 = new Node(9);
let root = new Node(1, Node2, Node9);

console.log(isBalanced(root));