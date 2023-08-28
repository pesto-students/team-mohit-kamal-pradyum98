class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const subtract = (head1, head2) => {
    const reverseLinkedList = (node) => {
        let currentNode = node;
        let prev = null;
        while (currentNode !== null) {
            let next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        return prev;
    };
    let current1 = head1;
    let current2 = head2;

    let result = new ListNode(0);
    let current = result;
    let list1 = reverseLinkedList(current1);
    let list2 = reverseLinkedList(current2);
    console.log(list1, list2);
    let borrow = 0;
    while (list1 !== null && list2 !== null) {
        let value1 = list1.val || 0;
        let value2 = list2.val || 0;

        let diff = value1 - value2 - borrow;
        borrow = 0;

        if (diff < 0) {
            diff += 10;
            borrow = 1;
        }

        current.next = new ListNode(diff);
        current = current.next;

        if (list1) list1 = list1.next;
        if (list2) list2 = list2.next;
    }

    current = result;
    while (current !== null) {
        console.log(current.val, 'Value');
        current = current.next;
    }
    return result;
};

const node1 = new ListNode(1);
const node2 = new ListNode(9);
const node3 = new ListNode(3);
const node4 = new ListNode(6);
const node5 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node4.next = node5;

subtract(node1, node4);
