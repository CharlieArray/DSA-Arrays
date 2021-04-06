var memory= require('./memory')
var Memory = new memory()

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
     console.log("this is arr after pop", arr)
     console.log("1st item", arr.get(1))
    arr.remove(0)
    arr.remove(1)
    console.log("arr should be empty:", arr.get(0))
    arr.set()


}

main()