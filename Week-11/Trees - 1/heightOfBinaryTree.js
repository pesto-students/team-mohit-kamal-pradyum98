class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const heightOfBinaryTree = (root) => {
    
    if(root == null){
        return 0;
    }
    
    const leftHeight = heightOfBinaryTree(root.left);
    const rightHeight = heightOfBinaryTree(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(10);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(-25);
root.right.right.left = new TreeNode(3);
root.right.right.right = new TreeNode(4);
root.right.right.right.right = new TreeNode(9);

console.log(heightOfBinaryTree(root));