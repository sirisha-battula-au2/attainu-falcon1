// Push and pop in the stack

class Stack {

    constructor() {
        this.array = [];
    }
    
Push(value) {
this.array.unshift(value);

    }

pop() {
    this.array.shift();

}   

print() {
    console.log(this.array)
}
}

let s = new Stack();

s.Push(12);

s.print();

s.Push(125);

s.print();

s.Push(18);

s.print();

s.Push(112);

s.print();

s.pop();

s.print();