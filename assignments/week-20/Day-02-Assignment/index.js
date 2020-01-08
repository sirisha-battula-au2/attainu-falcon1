//Reverse a singly linked list.

function SLL() {
    this.head = null;
    this.count = 0;
  }
  
  /* node class */
  function Node(val) {
    this.val = val;
    this.next = null;
  }
  
  /* reverse the linked list recursively */
  SLL.prototype.reverse = function() {
    if (!this.head) {
      return;
    }
  
    function reverse(current) {
      if (!current.next) {
        return current;
      } // the last node will stop here and not proceed below. it will be the head
  
      /* 
       then the second to last node will be the first to proceed below
       the last node will point to the second to last
       the second to last node will point to null
       proceed with other nodes in the call stack until the original first node 
      */
      var head = reverse(current.next);
      console.log(head);
      var nextnode = current.next;
      nextnode.next = current;
      current.next = null;
      return head;
    }
  
    this.head = reverse(this.head);
    console.log("final", this.head);
  };
  
  /* add a node to the end of the list */
  SLL.prototype.add = function(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.count++;
      return;
    }
  
    var current = this.head;
    while (current.next) {
      current = current.next;
    } 
  
    current.next = new Node(val);
    this.count++;
    return;
  };
  
  /* traverse the list and print each element */
  SLL.prototype.print = function() {
    if (!this.head) {
      return null;
    }
  
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  
    console.log("count: ", this.count);
  
    return;
  };
  
  list = new SLL();
  list.add(1);
  list.add(2);
  list.add(3);
  list.print();
  list.reverse();
  list.print();