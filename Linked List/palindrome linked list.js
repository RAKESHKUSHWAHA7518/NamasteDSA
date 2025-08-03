/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow=fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    let prev=null;
   let  curr=slow;
    while(curr){
      let  temp=curr.next;
      curr.next=prev;
      prev=curr;
      curr=temp
    }
    let firstlist=head;
    let secondlist=prev;
    while(secondlist){
        if(secondlist.val !==firstlist.val){
            return false;

        }
        firstlist=firstlist.next;
        secondlist=secondlist.next;

    }

    return true;

};