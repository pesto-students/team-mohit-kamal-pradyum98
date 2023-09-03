class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const isMirror = (root1, root2) => {
    if (!root1 && !root2) {
        return true;
    }
    if (!root1 || !root2) {
        return false;
    }

    return root1.val == root2.val && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
};

const isSymmetric = (root) => {
    if (!root) {
        return true;
    }

    return isMirror(root.left,root.right);
};



const root2 = new TreeNode(5);
root2.left = new TreeNode(4);
root2.left.left = new TreeNode(2);
root2.left.left.left = new TreeNode(1);
root2.left.left.right = new TreeNode(1);
root2.right = new TreeNode(4);
root2.right.left = new TreeNode(6);

console.log(isSymmetric(root2));
