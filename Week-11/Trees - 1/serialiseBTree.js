class TreeNode {
    constructor(val, left, right){
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

const serialiseBinaryTree = (root) => {
    if(!root){
        return '';
    }

    return `${root.val},${serialiseBinaryTree(root.left)},${serialiseBinaryTree(root.right)}`
}

const root1 = new TreeNode(5);
root1.left = new TreeNode(4);
root1.left.left = new TreeNode(2);
root1.left.left.left = new TreeNode(1);
root1.left.left.right = new TreeNode(3);
root1.right = new TreeNode(7);
root1.right.left = new TreeNode(6);

console.log(serialiseBinaryTree(root1));