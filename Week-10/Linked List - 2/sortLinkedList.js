class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const sortLinkedList = (head) => {
    let current = head;
    let oneCount = 0;
    let zeroCount = 0;
    let twoCount = 0;

    while(current !== null){
        if(current.val == 0){
            zeroCount++;
        } else if (current.val == 1){
            oneCount++;
        } else {
            twoCount++;
        }
        current = current.next;
    }

    current = head;
    while(current !== null && zeroCount > 0){
        current.val = 0;
        current = current.next;
        zeroCount--;
    }

    while (current !== null && oneCount > 0) {
        current.val = 1;
        current = current.next;
        oneCount--;
    }

    while (current !== null && twoCount > 0) {
        current.val = 2;
        current = current.next;
        twoCount--;
    }

    current = head;
    while(current !== null){
        console.log(current.val , 'Value');
        current = current.next;
    }

    return head;
}

const node1 = new ListNode(2);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(2);
const node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

sortLinkedList(node1);