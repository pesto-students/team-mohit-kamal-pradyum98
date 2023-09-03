class TreeNode {
    constructor(val, left = null , right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const checkBst = (root) => {
    if(root == null){
        return true;
    }
    if((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val)){
        return false;
    }
    const left = checkBst(root.left);
    const right = checkBst(root.right);

    return left && right;
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(1);
root.left.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);

console.log(checkBst(root));
