//------------------------------------------------------LINKED LIST PREPEND && APPEND--------------------------------------------



// class Node {
//     constructor(value){
//         this.value = value
//         this.next = 0
//     }
// }


// class linkedList {
//     constructor(){
//         this.head = null 
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
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

//      append(value){
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

//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty')
//         }else{
//             let current = this.head
//             let listValues = ''
//             while(current){
//                 listValues += `${current.value} `
//                 current = current.next
//             }
//             console.log(listValues)
//         }
//     }

// }


// const list = new linkedList()
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.print()
// list.prepend(10)
// list.print()    //OUTPUT = 10

// list.prepend(20)
// list.prepend(30)
// list.print()    //OUTPUT = 30 20 10

// list.append(20)
// list.append(30)
// list.print()    //OUTPUT = 30 20 10 20 30

// console.log(list.getSize())     //OUTPUT = 5










//------------------------------------------------------LINKED LIST PREPEND && APPEND && INSERT && REMOVE--------------------------------------------

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = 0
//     }
// }
// class linkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
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
//     insert(value, index){
//         if(index < 0 || index > this.size){
//             return 
//         }
//         if(index == 0){
//             this.prepend(value)
//         }else{
//             const node = new Node(value)
//             let previous = this.head
//             for(let i = 0; i < index -1; i++){
//                 previous = previous.next
//             }
//             node.next = previous.next
//             previous.next = node
//             this.size++
//         }
//     }
//     remove(index){
//         if(index < 0 || index >= this.size){
//             return 
//         }
//         let removedIndex
//         if(index == 0){
//             removedIndex = this.head
//             this.head = this.head.next
//         }else{
//             let previous = this.head
//             for(let i = 0; i < index -1; i++ ){
//                 previous = previous.next
//             }
//             removedIndex = previous.next
//             previous.next = removedIndex.next
//         }
//         this.size--
//         return removedIndex.value
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.value == value){
//             this.head = this.head.next
//             this.size--
//             return value
//         }else{
//             let previous = this.head
//             while(previous.next && previous.next.value !== value){
//                 previous = previous.next
//             }
//             if(previous.next){
//                 let removedValue = previous.next
//                 previous.next = removedValue.next
//                 this.size--
//                 return value 
//             }
//         }
//         return null
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('the list is empty')
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
// console.log(list.isEmpty())
// list.append(100,0)
// list.prepend(90)
// list.print()    //OUTPUT = 90-> 100->

// list.insert(95,1)
// list.append(105)
// list.print()    //OUTPUT = //OUTPUT = 90-> 95-> 100-> 105->

// console.log(list.remove(2))     //OUTPUT = 100
// list.print()    //OUTPUT = 90-> 95-> 105->
// console.log(list.getSize())     //OUTPUT = 3

// console.log(list.removeValue(105))  //OUTPUT = 105
// list.print()    //OUTPUT = 90-> 95->

// console.log(list.getSize())     //OUTPUT = 2








//--------------------------------------------------------SEARCH AND REVERSE-------------------------------------------------------



// class Node {
//     constructor(value){
//         this.value = value
//         this.next = 0
//     }
// }
// class linkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
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
//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index == 0){
//             this.prepend(value)
//         }else{
//             let node = new Node(value)
//             let previous = this.head
//             for(let i = 0; i < index -1; i++){
//                 previous = previous.next
//             }
//             node.next = previous.next
//             previous.next = node
//             this.size++
//         }
//     }
//     remove(index){
//         if(index < 0 || index >= this.size){
//             return 
//         }
//         let removedIndex
//         if(index == 0){
//             removedIndex = this.head
//             this.head = this.head.next
//         }else{
//             let previous = this.head
//             for(let i = 0; i < index -1; i++){
//                 previous = previous.next
//             }
//             removedIndex = previous.next
//             previous.next = removedIndex.next
//         }
//         this.size--
//         return removedIndex.value
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.value == value){
//             this.head = this.head.next
//             this.size--
//             return value
//         }else{
//             let previous = this.head
//             while(previous.next && previous.next.value !== value){
//                 previous = previous.next
//             }
//             if(previous.next){
//                 let removedValue = previous.next
//                 previous.next = removedValue.next
//                 this.size--
//                 return value
//             }
//         }
//     }
//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i = 0
//         let current = this.head
//         while(current){
//             if(current.value == value){
//                 return i
//             }
//             current = current.next
//             i++
//         }
//         return -1
//     }
//     reverse(){
//         let current = this.head
//         let previous = null
//         while(current){
//             let next = current.next
//             current.next = previous
//             previous = current
//             current = next
//         }
//         this.head = previous
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('the list is empty')
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
// list.insert(60,0)
// list.append(70)
// list.prepend(50)
// list.insert(55,1)
// list.insert(65,3)
// list.print()


// console.log('searchig 65 in index =', list.search(65))
// list.reverse()
// list.print()


// console.log(list.remove(2))
// list.print()
// console.log('list size is = ', list.getSize())

// list.print()
// console.log('list value in = ', list.removeValue(55))
// list.print()
// console.log('list size is = ', list.getSize())







//------------------------------------------------FIND MIDDLE ELEMENT IN LINKEDLIST--------------------------------------------------------------------





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
//         return this.size === 0
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
//     middle(){
//         if(this.isEmpty()){
//             console.log('empty')
//         }else{
//             let current = this.head
//             let mid = Math.floor(this.size / 2)
//             let i = 0
//             while(i < mid){
//                 current = current.next
//                 i++
//             }
//             return current.value
//         }
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
// list.prepend(60)
// list.prepend(55)
// list.prepend(50)
// list.prepend(45)
// list.prepend(40)
// list.print()
// console.log(list.getSize())
// console.log(list.middle())









//----------------------------------------------------------------------all



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
    //         return this.size === 0
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
    //     insert(value,index){
    //         if(index < 0 || index > this.size){
    //             return 
    //         }
    //         const node = new Node(value)
    //         if(index == 0){
    //             this.prepend(value)
    //         }else{
    //             let current = this.head
    //             for(let i = 0; i < index -1; i++){
    //                 current = current.next
    //             }
    //             node.next = current.next
    //             current.next = node
    //             this.size++
    //         }
    //     }
    //     remove(index){
    //         if(index < 0 || index >= this.size){
    //             return null
    //         }
    //         let removedIndex
    //         if(index == 0){
    //             removedIndex = this.head
    //             this.head = this.head.next
    //             this.size--
    //             return removedIndex.value
    //         }else{
    //             let previos = this.head
    //             for(let i = 0; i < index -1; i++){
    //                 previous = previous.next
    //             }
    //             removedIndex = previous.next
    //             previous.next = removedIndex.next
    //             this.size--
    //             return removedIndex.value
    //         }
    //     }
    //     removeValue(value){
    //         if(this.isEmpty()){
    //             return null
    //         }
    //         if(this.head.value == value){
    //             this.head = this.head.next
    //             this.size--
    //             return value
    //         }else{
    //             let current = this.head
    //             while(current.next && current.next.value !== value){
    //                 current = current.next
    //             }
    //             if(current.next){
    //                 let removedValue = current.next
    //                 current.next = removedValue.next
    //                 this.size--
    //                 return removedValue.value
    //             }
    //         }
    //     }
    //     search(value){
    //         if(this.isEmpty()){
    //             return -1
    //         }
    //         let current = this.head
    //         let i = 0
    //         while(current){
    //             if(current.value == value){
    //                 return i
    //             }
    //             current = current.next
    //             i++
    //         }
    //         return -1
    //     }
    //     reverse(){
    //         let current = this.head
    //         let previous = null
    //         while(current){
    //             let next = current.next
    //             current.next = previous
    //             previous = current
    //             current = next
    //         }
    //         this.head = previous
    //     }
    //     duplicate(){
    //         let current = this.head
    //         while(current.next){
    //             let previous = current
    //             while(previous.next){
    //                 if(current.value == previous.next.value){
    //                     let dupli = previous.next
    //                     previous.next = dupli.next
    //                     this.size--
    //                 }else{
    //                     previous = previous.next
    //                 }
    //             }
    //             current = current.next
    //         }
    //     }
    //     mid(){
    //         let mid = Math.floor(this.size / 2)
    //         let current = this.head
    //         let i = 0
    //         while(i < mid){
    //             current = current.next
    //             i++
    //         }
    //         return current.value
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
    // list.prepend(85)
    // list.append(45)
    // list.insert(55,2)
    // list.print()
    // list.prepend(55)
    // list.insert(45)
    // list.print()
    // list.duplicate()
    // list.print()
    // console.log(list.mid())