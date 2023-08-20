class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.visited = false;
    }
}
const intersectionPoint = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;

    while(current1 != null){
        current1.visited = true;
        current1 = current1.next;
    }

    while(current2 != null){
        if(current2.visited){
            return current2;
        }
        current2.visited = true;
        current2 = current2.next;
    }

    return 'No intersection point';
};

const node1 = new ListNode(1);
const node2 = new ListNode(9);
const node3 = new ListNode(3);
const node6 = new ListNode(6);
const node7 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node6.next = node7;
node7.next = node2;

const intersection = intersectionPoint(node1, node6);

console.log(intersection);
