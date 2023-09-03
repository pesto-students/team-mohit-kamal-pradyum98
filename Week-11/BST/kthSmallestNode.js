class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const kthSmallestNode = (root, k) => {
    const stack = [];
    let current = root;

    while(current !== null || stack.length > 0){
        while(current){
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        k--;

        if(k==0){
            return current.val;
        }

        current = current.right;
    }

    return -1;
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.right = new TreeNode(4);

const k = 3;
console.log(kthSmallestNode(root, k));