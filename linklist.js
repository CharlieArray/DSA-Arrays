class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

//head
//value
//next
//FIFO => linked list - good for data you insert a lot, like a log system or like calcuations O(1)
//LIFO => stack

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    //!!!!confused on insertLast syntax at end
    // insert last node
    insertLast(data){
        let node = new Node(data)
        let current;

        // if empty, make head
        if(!this.head){
            this.head = node;
        } else{
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }


    // insert at index
        insertAt(data, index){

            //if index is out of range
            if(index > 0 && index > this.size){
                return;
            }

            // if first index
            if (index ===0){
                this.head = new Node(data, this.head)
                return;
            }

            const node = new Node(data);
            let current, previous;

            // set current to first
            current = this.head;
            let count = 0;

            while(count < index){
                previous = current; // Node before index
                count++;
                current = current.next //Node after index
            }
            node.next = current;
            previous.next = node;

            this.size++
        }


    // find
        find(item){
            // Start at the head
            let currNode = this.head;

            // If the list is empty
            if(!this.head){
                return null;
            }

            // Check for the item
            while (currNode.data !== item){
                console.log("this is currNode", currNode)
                if (currNode.next === null){
                    return null
                }
                else {
                    currNode = currNode.next
                }
            }
            //Found item
            return currNode;
        }


    // remove at index



    // print list
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

const linkedlist = new LinkedList();

linkedlist.insertFirst(100);
linkedlist.insertFirst(200);
linkedlist.insertFirst(300);
linkedlist.insertLast(400);
linkedlist.insertAt(500, 2)

linkedlist.printListData()

let itemSearch = linkedlist.find(200)
console.log("this is item", itemSearch)

const SLL = new LinkedList();

SLL.insertFirst("Apollo");
SLL.insertFirst("Boomer");
SLL.insertFirst("Helo");
SLL.insertFirst("Husker");
SLL.insertFirst("Starbuck");
SLL.insertFirst("Tauhida");
SLL.insert


SLL.printListData()


/* Reversing Linked List

   Recursive method
   1) Divide the list in two parts - first node and rest of the linked list.

   2) Call reverse for the rest of the linked list.

   3) Link rest to first.

   4) Fix head pointer

*/

