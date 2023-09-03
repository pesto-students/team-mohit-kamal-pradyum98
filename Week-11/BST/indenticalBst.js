class TreeNode {
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const isIdentical = (root1, root2) => {
    if(root1 == null && root2 == null){
        return true;
    }

    if(root1.val !== root2.val){
        return false;
    }

    const left = isIdentical(root1.left, root2.left);
    const right = isIdentical(root1.right, root2.right);

    return left && right;
}

const root1 = new TreeNode(5);
root1.left = new TreeNode(4);
root1.left.left = new TreeNode(2);
root1.left.left.left = new TreeNode(1);
root1.left.left.right = new TreeNode(3);
root1.right = new TreeNode(7);
root1.right.left = new TreeNode(6);

const root2 = new TreeNode(5);
root2.left = new TreeNode(4);
root2.left.left = new TreeNode(2);
root2.left.left.left = new TreeNode(1);
root2.left.left.right = new TreeNode(3);
root2.right = new TreeNode(7);
root2.right.left = new TreeNode(6);

console.log(isIdentical(root1, root2));
