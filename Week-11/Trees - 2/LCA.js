class TreeNode {
    constructor(val, left, right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const lowestCommonAncestor = (root, node1, node2) => {
    if (root == null) {
        return null;
    }

    if (root.val == node1.val || root.val == node2.val) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, node1, node2);
    const right = lowestCommonAncestor(root.right, node1, node2);

    if (left && right) {
        return root;
    }

    return left || right;
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

const p = root.left.left;
const q = root.left.right;

const lca = lowestCommonAncestor(root, p, q);

console.log(lca.val); 