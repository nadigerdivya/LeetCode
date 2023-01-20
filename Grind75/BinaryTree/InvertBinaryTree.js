//InvertBinaryTree.js
//https://leetcode.com/problems/invert-binary-tree/

function invertTree(root) {
    if (!root) return null;

    const dfs = (node) => {
        if (node) {
            [node.left, node.right] = [node.right, node.left]
        }

        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);

    }

    dfs(root);
    return root;
}

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// let Node1 = new Node(1);
// let Node3 = new Node(3);
// let Node6 = new Node(6);
// let Node9 = new Node(9);
// let Node2 = new Node(2, Node1, Node3);
// let Node7 = new Node(7, Node6, Node9);
// let root = new Node(4, Node2, Node7);

let Node1 = new Node(1);
let Node2 = new Node(2, Node1);
let root = new Node(4, Node2);

console.log(root);

console.log(invertTree(root));
