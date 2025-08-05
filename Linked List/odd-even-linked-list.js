/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let add=head;
    if(!head ||!head.next){
        return head;
    }
    let even=head.next;
    let seven=even;
    while(add.next &&even.next){
        add.next=add.next.next;
        even.next=even.next.next;
        add=add.next;
        even=even.next;
    }
    add.next=seven;
    return head;
};