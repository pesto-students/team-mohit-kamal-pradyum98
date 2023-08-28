class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const zigZag = (head) => {
    let current = head;
    let isGreaterThanPrevious = true;

    while(current.next !== null){
        if (
            (isGreaterThanPrevious && current.val < current.next.val) ||
            (!isGreaterThanPrevious && current.val > current.next.val)
        ) {
            const temp = current.next.val;
            current.next.val = current.val;
            current.val = temp;
        }
        isGreaterThanPrevious = !isGreaterThanPrevious;
        current = current.next;
    }
    current = head;
    while(current !== null){
        console.log(current.val,'Value');
        current = current.next;
    }

    return head;
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

zigZag(node1);