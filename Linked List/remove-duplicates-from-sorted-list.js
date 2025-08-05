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
var deleteDuplicates = function(head) {
    let map= new Set()
    let sentinal= new ListNode()
    let curr= head
    sentinal.next=head;
    let prev=sentinal
    while(curr){
        if(map.has(curr.val)){
          prev.next = curr.next;

            
        }else{
       map.add(curr.val)
       prev=curr
        }
        curr=curr.next;
    }
    return sentinal.next;
    
};



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
var deleteDuplicates = function(head) {
    // let map= new Set()
    // let sentinal= new ListNode()
    // let curr= head
    // sentinal.next=head;
    // let prev=sentinal
    // while(curr){
    //     if(map.has(curr.val)){
    //       prev.next = curr.next;

            
    //     }else{
    //    map.add(curr.val)
    //    prev=curr
    //     }
    //     curr=curr.next;
    // }
    // return sentinal.next;

    let curr=head;
    while(curr&& curr.next){
        if(curr.val===curr.next.val){
            curr.next=curr.next.next
        }else{
            curr=curr.next
        }
    }
    return head;
    
};