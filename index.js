// THIS IS A FIBONACCI SEQUENCE THIS IS THE SEQUENCE IN WHICH EACH NUMBER IS THE SUM OF THE PREVIOUS TWO NUMBERS


// function fibonacci(n){
//     const fib = [ 0 , 1 ];
//     for( let i = 2; i < n; i++ ){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// };

// console.log(fibonacci(2)); // OUT PUT = [ 0 , 1 ]
// console.log(fibonacci(3)); // OUT PUT = [ 0 , 1 , 1 ]
// console.log(fibonacci(7)); // OUT PUT = [ 0 , 1 , 1 , 2 , 3 , 5 , 8 ]

// HERE THE BIG-O IS O(n) BECAUSE THERE IS ONLY ONE LOOP USED




//----------------------------------------------------------FACTORIAL OF A NUMBER-----------------------------------------------------------------

// function factorial(n){
//     let result = 1;
//     for ( let i = 2; i <= n; i++ ){
//         result *= i
//     }
//     return result
// };

// console.log(factorial(1)) // OUT PUT = 1
// console.log(factorial(3)) // OUT PUT = 6 
// console.log(factorial(5)) // OUT PUT = 120

// HERE THE BIG-O IS O(n) LINEAR TIME 

//-------------------------------------------------------------FIND PRIME NUMBER-----------------------------------------------------------------------


// TO FIND A PRIME NUMBER IF THE OTHER NUMBER CAN MULTIPY AND THE SUM OF THE MULTIPLICATION IS THE NUMBER IT'S NOT A PRIME NUMBER
// ONLY IT BECAME PRIME IF 1 * AND THE NUMBER && THE NUMBER * 1 
// function isPrime(n){
//     if( n < 2 ){
//         return false
//     }
//     for ( let i = 2; i < n; i++ ){
//         if( n%i === 0 ){
//             return false
//         }
//     }
//     return true
// }


// console.log(isPrime(1)) // OUTPUT = FALSE 
// console.log(isPrime(5)) // OUTPUT = TRUE 
// console.log(isPrime(6)) // OUTPUT = FALSE BECAUSE THE NUMBER ALSO MULTIPLE BY 3 EG:- 1 * 6 ||  3 * 2 || 6 * 1   

// THE BIG-O IS O(n) 


//-------------------------------------------------------------FIND SQUARE ROOT OF A PRIME NUMBER-----------------------------------------------------------------------

// function isPrime(n){
//     if( n < 2 ){
//         return false
//     }
//     for ( let i = 2; i < Math.sqrt(n); i++ ){
//         if( n%i === 0 ){
//             return false
//         }
//     }
//     return true
// }


// console.log(isPrime(1)) // OUTPUT = FALSE 
// console.log(isPrime(5)) // OUTPUT = TRUE 
// console.log(isPrime(6)) // OUTPUT = FALSE

// THE BIG-O OF THIS APPROACH IS - O(sqrt(n))






//-------------------------------------------------------------POWER OF TWO-----------------------------------------------------------------------


// function powerOfTwo(n){
//     if( n < 1 ){
//         return false
//     }
//     while ( n > 1 ){
//         if( n%2 !== 0 ){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }



// console.log(powerOfTwo(1)); // OUTPUT = TRUE
// console.log(powerOfTwo(2)); // OUTPUT = TRUE
// console.log(powerOfTwo(6)); // OUTPUT = FALSE BECAUSE IF WE DIVIDE THE SIX BY 2 IT WILL COME THREE AND IN THE LOOP IF / AGAIN IT WILL 
//                             //  COME 1.5 SO THIS IS FALSE


// HERE THE BIG-O IS O(logn) BECAUSE IN EVERY LOOP IT IS REDUCING THE INPUT SIZE BY HALF SO THIS IS O(logn)                            








// function recursiveFibonacci(n){
//     if( n < 2 ){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }


// console.log(recursiveFibonacci(4))




//------------------------------------------------------SUM OF ARRAY USING RECURSION(SLICE)--------------------------------------------

// function sumSlice(arr){
//     if(arr.length == 0){
//         return 0
//     }
//     return arr[0] + sumSlice(arr.slice(1))
// }


// let array = [1,2,3,4,5]
// console.log(sumSlice(array))


//SUM OF ARRAY USING RECURSION(POP)

// function sumPop(arr){
//     if(arr.length == 0){
//         return 0
//     }
//     return arr.pop() + sumPop(arr)
// }


// let array1 = [1,2,3,4,5,6]
// console.log(sumPop(array1))



//------------------------------------------------------FACTORIAL USING RECURSION--------------------------------------------

// function factorialRecursion(n){
//     if( n === 0 ){
//         return 1
//     }
//     return n * factorialRecursion( n -1 )
// }

// console.log(factorialRecursion(4));

//HERE THE BIG O IS O(n) LINEAR TIME 
//BECAUSE IT'S CALLING THE FUNCTION AGAIN AND AGAIN BECAUSE OF THAT THE INPUT SIZE OF N IS INCREASING 
//SO THE TIME COMPLOXITY ALSO




//------------------------------------------------------LINEAR SEARCH--------------------------------------------

// function linear(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// let array = [12,14,21,2,1,4]

// console.log(linear(array, 14)) // OUTPUT = 1
// console.log(linear(array, 7)) //OUTPUT = -1

//HERE ONLY ONE LOOP IS THERE SO THE "BIG-O = O(n)" "LINEAR TIME COMPLEXITY"


//------------------------------------------------------BINARY SEARCH--------------------------------------------

// function binary(arr,target){
//     let left = 0;
//     let right = arr.length -1;

//     while(left <= right){
//         let mid = Math.floor( (left + right) /2 )
//         if(arr[mid] == target){
//             return mid
//         }else if(arr[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
//     return -1
// }

// let array = [1,3,5,7,9,11,13];
// console.log(binary(array, 13)) //OUTPUT = 6


// HERE THE BIG O = "O(logn)" "LOGARITHMIC" BECAUSE IT'S RDUCING HALF BY HALF




//------------------------------------------------------BINARY SEARCH BY RECURSION--------------------------------------------


// function binaryRecursion(arr, target){
//     return search(arr, target, 0, arr.length -1)
// }

// function search(arr, target, left, right){
//     if(left > right){
//         return -1
//     }

//     let mid = Math.floor((left + right) / 2)
//     if(target === arr[mid]){
//         return mid
//     }

//     if(target < arr[mid]){
//         return search(arr,target, left, mid + 1)
//     }else{
//         return search(arr,target, mid -1, right)
//     }
// }

// let array = [1,3,5,7,9,11,13]
// console.log(binaryRecursion(array,7))




//------------------------------------------------------LINKED LIST--------------------------------------------

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = 0
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }
// }


// const list = new linkedList()
// console.log(list.isEmpty())
// console.log(list.getSize())


// THIS IS HOW WE CREATE A LINKED LIST




//------------------------------------------------------LINKED LIST PREPEND--------------------------------------------

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

//     print(){
//         if(this.isEmpty()){
//             console.log('the list is Empty')
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

// list.prepend(62)
// list.print() // OUTPUT = 62

// list.prepend(7)
// list.prepend(960)
// list.print() // OUTPUT = 960 7 62
    







//------------------------------------------------------LINKED LIST APPEND--------------------------------------------

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

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
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

//     print(){
//         if(this.isEmpty()){
//             console.log('the list is empty')
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
// list.append(10) 
// list.print() //OUTPUT = 10
// list.append(20)
// list.append(30)
// list.print() // OUTPUT 10 20 30










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
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.print()