class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const invertBinaryTree = (root) => {
    if(!root){
        return;
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    return root;
}

const printLevelOrder = (root) => {
    if(!root){
        return;
    }

    const queue = [root];

    while(queue.length > 0){
        const node = queue.shift();
        console.log(node.val);

        if(node.left){
            queue.push(node.left);
        }

        if(node.right){
            queue.push(node.right);
        }
    }
    return;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log('Original Tree:');
printLevelOrder(root);

const invertedRoot = invertBinaryTree(root);

console.log('Inverted Tree:');
printLevelOrder(invertedRoot);
