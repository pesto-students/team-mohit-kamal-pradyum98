class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}



const maxPathSum = (root) => {
    let maxSum = -Infinity;
    const maxPathSumUtil = (root) => {
        if (root === null) {
            return 0;
        }
        const leftSum = Math.max(maxPathSumUtil(root.left), 0);
        const rightSum = Math.max(maxPathSumUtil(root.right), 0);

        const currentPathSum = leftSum + rightSum + root.val;
        maxSum = Math.max(currentPathSum, maxSum);
        return root.val + Math.max(leftSum, rightSum);
    };
    maxPathSumUtil(root);
    return maxSum;
}

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(10);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(-25);
root.right.right.left = new TreeNode(3);
root.right.right.right = new TreeNode(4);

console.log(maxPathSum(root));