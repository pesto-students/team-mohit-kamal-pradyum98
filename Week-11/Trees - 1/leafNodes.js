class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const leafNodes = (root) => {
    let count = 0;
    const leafNodeHelper = (root) => {
        if (root && (root.left == null && root.right == null)) {
            count++;
            return;
        }
        if (root === null) {
            return;
        }
        leafNodeHelper(root.left);
        leafNodeHelper(root.right);
    };

    leafNodeHelper(root);
    return count;
};

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(10);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(-25);
root.right.right.left = new TreeNode(3);
root.right.right.right = new TreeNode(4);
root.right.right.right.right = new TreeNode(9);

console.log(leafNodes(root));
