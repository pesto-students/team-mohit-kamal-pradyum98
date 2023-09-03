class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const levelOrder = (root) => {
    if (!root) {
        return;
    }
    const queue = [root];
    let level = 1;
    while (queue.length > 0) {
        const levels = queue.length;
        const levelsResult = [];
        for (let i = 0; i < levels; i++) {
            const current = queue.shift();
            levelsResult.push(current.val);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        console.log(`Level ${level} : ${levelsResult.join(',')}`);
        level++;
    }
    return;
};

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

levelOrder(root);
