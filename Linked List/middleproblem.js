var middleNode = function(head) {
    let slow = head;
    let fast = head;

    // Move slow by 1 and fast by 2
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // Middle node
};
