class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const rootToLeafSumUtil = (node, target, sum) => {
    if (node.left == null && node.right == null) {
        return target == sum;
    }
    return (
        rootToLeafSumUtil(node.left, target, sum + node.left.val) ||
        rootToLeafSumUtil(node.right, target, sum + node.right.val)
    );
};
const rootToLeafSum = (root, target) => {
    if (!root) {
        return;
    }
    return rootToLeafSumUtil(root, target, root.val);
};

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(rootToLeafSum(root, 14));