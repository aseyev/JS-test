function getFirstNumber () {
    return document.querySelector('#numberForFirstList').value
}
function getSecondNumber () {
    return document.querySelector('#numberForSecondList').value
}

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
    return str;
}

function sumLinkedList() {
    let arrayForFirstList = (getFirstNumber()+'').split('').reverse().map(i => i=Number.parseInt(i));
    let arrayForSecondList = (getSecondNumber()+'').split('').reverse().map(i => i=Number.parseInt(i));
    let l1 = addNode(arrayForFirstList);
    let l2 = addNode(arrayForSecondList);
    
    let sumVal = 0;
    let head = null;
    let resultList = null;
    //while current node not last into l1 or l2, sum current nodes from l1 and l2, 
    // and reminder from last iteration, and goto next node at both lists:
    while (l1!=null || l2!=null) {
        if (l1!=null) {
            sumVal = sumVal += l1.val;
            l1 = l1.next;
        }
        if (l2!=null) {
            sumVal = sumVal += l2.val;
            l2 = l2.next;
        }
        //put reminder (%10) from sumval to the head of resultList, create next node in resultList
        if (head!=null) {
            head.next = new ListNode(sumVal % 10);
            head = head.next;
        } else {
            //or create the resultList
            resultList = new ListNode(sumVal % 10);
            head = resultList;
        }
        //save a next digit from sumVal (decrease to 0 or 1)
        sumVal = Math.floor(sumVal / 10);
    }
//control of last digit, create last Node with last reminder
    if (sumVal) {
        head.next = new ListNode(sumVal);
    }
    document.querySelector(".resultContent")
            .innerHTML ='<p>List1: '+ printList(addNode(arrayForFirstList)) +'</p>' + 
                        '<p>List2: '+ printList(addNode(arrayForSecondList)) +'</p><br>' +
                        '<p>List3: '+ printList(resultList) +'</p>'
                        // + '<p>SumNumber: '+ resultList.reverse().join('') +'</p>' 
    // return resultList;
}
