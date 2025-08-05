var addTwoNumbers = function(l1, l2) {
    let sum = new ListNode(0);  // Dummy head node
    let curr = sum;
    let carry = 0;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let total = val1 + val2 + carry; // Don't overwrite `sum`
        carry = Math.floor(total / 10);
        let digit = total % 10;

        curr.next = new ListNode(digit);
        curr = curr.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return sum.next;
};
