class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const treeToLinkedList = (root) => {
    const values = []
    const inOrderTraversal = (head) => {
        if(head == null){
            return;
        }
        inOrderTraversal(head.left);
        values.push(head.val);
        inOrderTraversal(head.right);
    }
    inOrderTraversal(root);

    const list = new ListNode(-1);
    let current = list;
    for(let e of values){
        current.next = new ListNode(e);
        current = current.next;
    }

    current = list.next;
    while(current !== null){
        console.log(current.val , 'Value');
        current = current.next;
    }

    return list.next;
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(1);
root.left.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);

treeToLinkedList(root);