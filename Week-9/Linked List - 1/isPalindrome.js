class LinkedListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const isPalindrome = (head) => {
    const reverseLinkedList = (node) => {
        let prev = null;
        while (node !== null) {
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return prev;
    };

    let slow = head;
    let fast = head;

    while (slow.next !== null && fast.next && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverseLinkedList(slow);
    let firstHalf = head
    while(firstHalf.next !== null && secondHalf.next !== null){
        if(firstHalf.val !== secondHalf.val){
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
};

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(2);
const node5 = new LinkedListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindrome(node1));





