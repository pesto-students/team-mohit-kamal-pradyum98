class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const mergeSortedLinkedList = (head1, head2) => {
    let newHead = new ListNode(-1);
    let current = newHead;
    
    while(head1 !== null && head2 !== null){
        if(head1.val < head2.val){
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next;
    }

    if(head1 !== null){
        current.next = head1;
    }

    if (head2 !== null) {
        current.next = head2;
    }

    let newNode = newHead.next;
    while (newNode.next !== null) {
        console.log(newNode.val, 'VAL');
        newNode = newNode.next;
    }

    return newHead.next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


const node6 = new ListNode(0);
const node7 = new ListNode(2);
const node8 = new ListNode(3);
const node9 = new ListNode(7);
const node10 = new ListNode(9);

node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;

mergeSortedLinkedList(node1, node6);