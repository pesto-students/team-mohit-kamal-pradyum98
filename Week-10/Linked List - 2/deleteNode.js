class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const deleteNode = (head, val) => {
    let current = head;
    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
        }
        current = current.next;
    }

    current = head;
    while (current !== null) {
        console.log(current.val, 'VAL');
        current = current.next;
    }
    return head;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

deleteNode(node1, 3);