class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reverseKnodes = (head, k) => {
    const reverseLinkedList = (node, count) => {
        let prev = null;
        while (node !== null && count > 0) {
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            count--;
        }
        return prev;
    };

    let current = head;
    const answerArray = [];

    while (current !== null) {
        let node = current;
        let count = 0;

        while (node !== null && count < k) {
            node = node.next;
            count++;
        }

        let reversedHead = reverseLinkedList(current, k);
        while (reversedHead !== null) {
            answerArray.push(reversedHead.val);
            reversedHead = reversedHead.next;
        }

        current = node;
    }

    return answerArray;
};

const node1 = new Node(1);
const node2a = new Node(9);
const node2b = new Node(8);
const node3 = new Node(2);
const node4a = new Node(6);
const node4b = new Node(4);
const node5 = new Node(11);

node1.next = node2a;
node2a.next = node2b;
node2b.next = node3;
node3.next = node4a;
node4a.next = node4b;
node4b.next = node5;

const newList = reverseKnodes(node1, 3);
console.log(newList); // Output: [8, 9, 1, 4, 6, 2, 11]
