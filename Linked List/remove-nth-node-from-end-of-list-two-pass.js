/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinal= new ListNode();
    sentinal.next=head;
    let length=0;
    while(head){
        head=head.next;
        length++;
    }

    let prevpostion =length-n;
    let prev=sentinal;
    for( let i=0; i<prevpostion;i++){
        prev=prev.next;
    }

    prev.next=prev.next.next;
    return sentinal.next;

    
};



     let sentinal= new ListNode();
     sentinal.next=head;
    // let slow=head;
    // let fast=head

    // for( let i=0;i<n;i++){

    // }
    let fast=sentinal;
   for (let i = 0; i <n; i++) {
        fast = fast.next;
    }

    // Step 2: Move both pointers until fast reaches the end
    let slow=sentinal
    while ( fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 3: Remove the target node
    slow.next = slow.next.next;

    return sentinal.next;