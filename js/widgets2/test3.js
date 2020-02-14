function ListNode(val) {
    this.val = val;
    this.next = null;
}
function addNode(list) {
    return list.reduceRight(function (head, val) {
        let newHeadNode = new ListNode(val);
        if (head) {
            newHeadNode.next = head;
        }
        return newHeadNode;
    }, null);
}

function printList(list) {
    let tmp = list;
    let str = '';
    while (tmp) {
        str = str + ' -> ' + tmp.val;
        tmp = tmp.next;
    }
    console.log(str)
}
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)

let l1 = addNode([2, 4, 3]);
let l2 = addNode([5, 6, 4]);

printList(l1);
printList(l2);

function sumLinkedList(l1, l2) {
    let sumVal = 0;
    let head = null;
    let resultList = null;
//while current node not last into l1 or l2, sum current nodes from l1 and l2, 
// and reminder from last iteration, and goto next node at both lists:
    while (l1!=null || l2!=null) {
        if (l1!=null) {
            sumVal += l1.val;
            l1 = l1.next;
            console.log('sumVal1 ', sumVal)
        }
        if (l2!=null) {
            sumVal += l2.val;
            l2 = l2.next;
            console.log('sumVal2 ', sumVal)
        }
//put reminder (%10) from sumval to the head of resultList, create next node in resultList
        if (head!=null) {
            head.next = new ListNode(sumVal % 10);
            head = head.next;
        } else {
            //or create the resultList
            resultList = new ListNode(sumVal % 10);
            head = resultList;
            console.log('sumVal4 ', sumVal)
        }
//save a next digit from sumVal (decrease to 0 or 1)
        sumVal = Math.floor(sumVal / 10);
        console.log('sumVal next ', sumVal)
    }
//control of last digit, create last Node with last reminder
    if (sumVal) {
        head.next = new ListNode(sumVal);
    }
    return resultList;
}
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807

let l3 = sumLinkedList (l1, l2);
printList(l3);

// Input: (8 -> 3) + (1 -> 9 -> 2)
// Output: 9 -> 2 -> 3
// Explanation: 38 + 291 = 329

// l1 = addNode([8, 3]);
// l2 = addNode([1, 9, 2]);

// printList(l1);
// printList(l2);

// l3 = sumLinkedList (l1, l2);
// printList(l3);
