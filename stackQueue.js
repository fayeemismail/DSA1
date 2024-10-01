//-----------------------------------------------------------------------STACK AND QUEUE -----------------------------------------------------------------

    // class Node {
    //     constructor(value){
    //         this.value = value
    //         this.next = null
    //     }
    // }
    // class linkedList {
    //     constructor(){
    //         this.head = null
    //         this.size = 0
    //     }
    //     isEmpty(){
    //         return this.size == 0
    //     }
    //     getSize(){
    //         return this.size
    //     }
    //     prepend(value){
    //         const node = new Node(value)
    //         if(this.isEmpty()){
    //             this.head = node
    //         }else{
    //             node.next = this.head
    //             this.head = node
    //         }
    //         this.size++
    //     }
    //     append(value){
    //         const node = new Node(value)
    //         if(this.isEmpty()){
    //             this.head = node
    //         }else{
    //             let previous = this.head
    //             while(previous.next){
    //                 previous = previous.next
    //             }
    //             previous.next = node
    //         }
    //         this.size++
    //     }
    //     removeFront(){
    //         if(this.isEmpty()){
    //             return null
    //         }
    //         let removedValue = this.head
    //         this.head = this.head.next
    //         this.size--
    //         return removedValue.value
    //     }
    //     print(){
    //         if(this.isEmpty()){
    //             console.log('the list is Empty')
    //         }else{
    //             let current = this.head
    //             let listValues = ''
    //             while(current){
    //                 listValues += `${current.value}-> `
    //                 current = current.next
    //             }
    //             console.log(listValues)
    //         }
    //     }
    // }
    // const list = new linkedList()
    // list.prepend(50)
    // list.append(55)
    // list.prepend(45)
    // list.append(60)
    // list.print()
    
    
    
    // class linkedStack {
    //     constructor(){
    //         this.list = new linkedList()
    //     }
    //     push(value){
    //         this.list.prepend(value)
    //     }
    //     pop(){
    //         return this.list.removeFront()
    //     }
    //     peek(){
    //         return this.head.value
    //     }
    //     isEmpty(){
    //         return this.list.size == 0
    //     }
    //     getSize(){
    //         return this.list.size
    //     }
    //     print(){
    //         this.list.print()
    //     }
        
    // }
    //  const stack = new linkedStack()
    //  stack.push(50)
    //  stack.push(45)
    //  stack.push(40)
    //  stack.print()
    //  console.log(stack.getSize())
    //  stack.pop()
    //  stack.print()
    //  console.log(stack.getSize())
    //  console.log(stack)
     
     
     
    //  class listQueue {
    //     constructor(){
    //         this.list = new linkedList()
    //     }
    //     enqueue(value){
    //         this.list.append(value)
    //     } 
    //     dequeue(){
    //         return this.list.removeFront()
    //     }
    //     peek(){
    //         return this.head.value
    //     }
    //     isEmpty(){
    //         return this.list.size == 0
    //     }
    //     getSize(){
    //         return this.list.size
    //     }
    //     print(){
    //         this.list.print()
    //     }
    //  }
    //  const queue = new listQueue()
    //  console.log(queue.isEmpty())
    //  queue.enqueue(50)
    //  queue.enqueue(55)
    //  queue.enqueue(60)
    //  queue.print()
    //  console.log(queue.dequeue())
    //  console.log(queue.getSize())









//------------------------------------------------------------------------QUEUE----------------------------------------------------------

    // class Node {
    //     constructor(value){
    //         this.value = value
    //         this.next = null
    //     }
    // }
    // class linkedQueue {
    //     constructor(){
    //         this.front = null
    //         this.rear = null
    //     }
    //     enqueue(value){
    //         const node = new Node(value)
    //         if(this.front == null){
    //             this.front = node
    //             this.rear = node
    //         }else{
    //             this.rear.next = node
    //             this.rear = node
    //         }
    //     }
    //     dequeue(){
    //         if(this.front == null){
    //             console.log('list is empty')
    //         }else{
    //             this.front = this.front.next
    //         }
    //     }
    //     peek(){
    //         return this.front.value
    //     }
    //     print(){
    //         if(this.front == null){
    //             console.log('list is empty')
    //         }else{
    //             let current = this.front
    //             let listValues = ''
    //             while(current){
    //                 listValues += `${current.value}-> `
    //                 current = current.next
    //             }
    //             console.log(listValues)
    //         }
    //     }
    // }
    // const queue = new linkedQueue()
    // queue.enqueue(50)
    // queue.enqueue(55)
    // queue.enqueue(60)
    // queue.print()
    // console.log(queue)
    // queue.dequeue()
    // queue.print()
    // console.log(queue)















//--------------------------------------------------------STACK QUEUE W PUSH UNSHIFT----------------------------------------------------

    // class Stack {
    //     constructor(){
    //         this.items = []
    //     }
    //     push(value){
    //         this.items.unshift(value)
    //     }
    //     pop(){
    //         this.items.shift()
    //     }
    //     peek(){
    //         if(!this.items.length == 0){
    //             return this.items[0]
    //         }
    //         return null
    //     }
    //     print(){
    //         console.log(this.items.toString())
    //     }
    // }
    // const stack = new Stack()
    // stack.push(50)
    // stack.push(45)
    // stack.push(40)
    // stack.print()
    // stack.pop()
    // stack.print()
    
    // class Queue {
    //     constructor(){
    //         this.items = []
    //     }
    //     enqueue(value){
    //         this.items.push(value)
    //     }
    //     dequeue(){
    //         this.items.shift()
    //     }
    //     peek(){
    //         if(!this.items.length == 0){
    //             return this.items[0]
    //         }
    //         return null    
    //     }
    //     print(){
    //         console.log(this.items.toString())
    //     }
    // }
    // const queue = new Queue()
    // queue.enqueue(50)
    // queue.enqueue(55)
    // queue.enqueue(60)
    // queue.print()
    // queue.dequeue()
    // queue.print()
    