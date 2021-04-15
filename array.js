var memory= require('./memory')
var Memory = new memory()

//complexity for array
//search complexity => linear search or binary; worst case O(1)
//[0,1,2,3,4,6] => O(1)

//Arrays vs Linked Lists
//Array Cons: Inserting array difficult because you have to shift all the values
//Array Pro: Searching is easy
//Linked List Pro: Inserting good
//Linked List Cons: Searching difficult because data not connected in order

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = Memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        Memory.set(this.ptr + this.length, value);
        this.length++;
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = Memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return Memory.get(this.ptr + index);
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = Memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of Memory');
        }
        Memory.copy(this.ptr, oldPtr, this.length);
        Memory.free(oldPtr);
        this._capacity = size;
    }

    set(ptr, value) {
        this.Memory[ptr] = value;
      }
}
Array.SIZE_RATIO = 3;

function main(){
    Array.SIZE_RATIO = 3;

    let arr = new Array();

    arr.push(3)
    arr.push(4)
    arr.push(9)
    arr.push(12)
    arr.push(15)
    arr.push(45)
    console.log("this is arr", arr)

    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push('tauhida')
    console.log("arr with tauhida:", arr)

}
main()


function URLtoString(){
    const urlString = "tauhida parveen"

    //input is string, goal is to make white space == %20
    //split string into multiple chars  .split()
    //loop through chars
    //if " " == true => " " = %20
    //join

    let splitArray = urlString.split(" ") 
    console.log(splitArray)
 

    let result = [];
    
    result = splitArray.join("%20")
    console.log('this is result', result)
}
URLtoString()

