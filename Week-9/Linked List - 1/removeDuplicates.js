class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const iterateLinkedList = (head) => {
    console.log(head.val);
    while (head.next !== null) {
        console.log(head.next.val);
        head = head.next;
    }
};
const removeDuplicates = (head) => {
    const seen = new Set();
    let current = head;
    seen.add(current.val);
    while (current.next !== null) {
        if (seen.has(current.next.val)) {
            current.next = current.next.next;
        } else {
            seen.add(current.next.val);
            current = current.next;
        }
    }
    iterateLinkedList(head);
    return head;
}

const node1 = new Node(1);
const node2a = new Node(2);
const node2b = new Node(2);
const node3 = new Node(3);
const node4a = new Node(4);
const node4b = new Node(4);
const node5 = new Node(5);

node1.next = node2a;
node2a.next = node2b;
node2b.next = node3;
node3.next = node4a;
node4a.next = node4b;
node4b.next = node5;

const newList = removeDuplicates(node1);






