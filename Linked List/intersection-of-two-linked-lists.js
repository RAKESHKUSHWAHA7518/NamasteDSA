/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hash=new Set();
    let curr= headB;
    let currA=headA;
    while(curr){
        hash.add(curr)
        curr=curr.next;
    }

    while(currA){
        if(hash.has(currA)){
            return currA
        }
        currA=currA.next;

    }
    return null;

};