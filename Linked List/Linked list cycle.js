/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let seenNodes= new Set();
    let curr=head;
    while(curr){
         if(seenNodes.has(curr)){
            return true
         }

         seenNodes.add(curr);
         curr=curr.next;
    }

    return false
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // let seenNodes= new Set();
    // let curr=head;
    // while(curr){
    //      if(seenNodes.has(curr)){
    //         return true
    //      }

    //      seenNodes.add(curr);
    //      curr=curr.next;
    // }

    // return false

    let slow=head;
    if(!head){
        return false;
    }
    let fast=head.next;

    while(slow!==fast){
        // if(fast ||fast.next){
        //     return false;
        // }
        if (fast===null || fast.next===null) {
  return false;
}

    slow=slow.next;
    fast=fast.next.next;
    }

    return true;
    
};