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





//------------------------------------------------------FIBONACCI W RECURSION--------------------------------------------



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
//         return search(arr,target, left, mid - 1)
//     }else{
//         return search(arr,target, mid + 1, right)
//     }
// }

// let array = [1,3,5,7,9,11,13]
// console.log(binaryRecursion(array,7))





//--------------------------------------------------------------COUNT OF LETTER USING RECURSION---------------------------------------------------------


// function count(str){
//     if(str.length == 0){
//         return 0
//     }
//     let i = 0
//     if(str[0] == 'l'){
//         i++
//     }
//     return i + count(str.slice(1))
// }
// console.log(count('malayalam'))






//-----------------------------------------------------------COUNT OF WORD USING RECUSRION---------------------------------------------------------------


// function count(str,word){
//     if(str.length < word.length){
//         return 0
//     }
//     let i = 0
//     if(str.slice(0,word.length) == word){
//         i++
//     }
//     return i + count(str.slice(1),word)
// }
// console.log(count('malayalam is mother tongu for malayalam speakers', 'malayalam'))






//--------------------------------------------------------------------------REVERSE WORD------------------------------------------------------------------------------



// function reverseword(str, i = 0, word = '', ans = ''){
//     if(str.length === i ){
//         return ans + word
//     }
    
//     if(str[i] == ' '){
//         ans += word + ' '
//         return reverseword(str, i + 1, '', ans)
//     }else{
//         return reverseword(str,i + 1, str[i] + word, ans)
//     }
// }

// console.log(reverseword('hello world'))




//--------------------------------------------------SUM OF AN ARRAY USING RECURSION-----------------------------------------------------

// function sum(arr){
//     if(arr.length == 0){
//         return 0
//     }
//     let current = arr[0] % 2 == 0 ? arr[0] : 0
//     return current + sum(arr.slice(1))
// }
// let array = [1,2,3,4,5,6,76,7,8,7,6,4,3,2,1]
// console.log(sum(array))


//--------------------------------------------------LARGEST ELEMENT IN AN ARRAY USING RECURSION-----------------------------------------------------


// function largest(arr,n){
//     if(n == 1){
//         return arr[0]
//     }

//     let max = largest(arr,n-1)
//     if(arr[n-1] < max){
//         return arr[n-1]
//     }else{
//         return max
//     }
// }
// let array = [1,2,3,4,5,6,7,8,90,10,11,15]
// let find = largest(array,array.length)
// console.log(find)



//--------------------------------------------------REMOVING DUPLICATES FROM AN ARRAY-----------------------------------------------------


// let array = [4,5,2,7,3,4,3,2]
// for(let i = 0; i < array.length; i++){
//     for(let j = i + 1; j < array.length; j++){
//         if(array[i] == array[j]){
//             array.splice(j,1)
//         }
//     }
// }
// console.log(array)











// function factorial(n){
//     if(n == 0){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5))
// function sumDigit(n){
//     if(n == 0){
//         return 0 
//     }
//     let lastDigit = n % 10
//     let remain = (n - lastDigit) / 10
//     return lastDigit + sumDigit(remain)
// }
// console.log(sumDigit(1234))
// function fibonacci(n){
//     if(n < 2){
//         return n
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(3))
// function reverse(str){
//     if(str.length == 0){
//         return str
//     }
//     return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse('hello'))
// function pal(str){
//     if(str.length <= 1){
//         return true
//     }
//     if(str[0] !== str[str.length-1]){
//         return false
//     }
//     return pal(str.slice(1,str.length-1))
// }
// console.log(pal('racecar'))
// function maximum(arr,n){
//     if(n == 0){
//         return arr[0]
//     }
//     let max = maximum(arr,n-1)
//     if(arr[n-1] < max){
//         return max
//     }else{
//         return arr[n-1]
//     }
// }
// let array = [10,5,55,45,36,12,99,58,65]
// console.log(maximum(array,array.length))
// function sumOfArray(arr){
//     if(arr.length == 0){
//         return 0
//     }
//     return sumOfArray(arr.slice(1)) + arr[0]
// }
// console.log(sumOfArray(array))
// function count(str){
//     if(str.length == 0){
//         return ''
//     }
//     let i = 0
//     if(str[0] !== 'a' ){
//         return str[0] + count(str.slice(1))
//     }
//     return count(str.slice(1))
// }
// console.log(count('banana'))
































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

// function toLinkedList(arr){
//     let list = new linkedList()
//     for(let element of arr){
//         list.append(element)
//     }
//     return list
// }
// let array = [10,20,30,40,50,60,70];
// const printAppend = toLinkedList(array)
// printAppend.print()

// const list = new linkedList()
// console.log(list.isEmpty())



// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class linkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
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
//             this.tail = node
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
//             this.tail = node
//         }else{
//             this.tail.next = node
//             node.next = this.head
//             this.tail = node
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
//                 listValues += `${current.value}-> `
//                 current = current.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list = new linkedList()
// console.log(list.isEmpty())
// list.prepend(45)
// list.append(50)
// list.print()




// function pal(str){
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[str.length-1 -i]){
//             return true
//         }
//     }
//     return false
// }
// console.log(pal('malayalam'))





















// function recursion(str){
//     if(str.length <= 1){
//         return true
//     }
    
//     if(str[0] !== str[str.length-1] ){
//         return false
//     }
    
//     return recursion(str.slice(1,str.length-1))
// }

// console.log(recursion('malayalam'))


















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
//     removeLast(index){
//         if(index < 0 || index >= this.size){
//             return 
//         }
//         if(this.size -1 -index === 0){
//             const removedValue = this.head
//             this.head = this.head.next
//             this.size--
//             return removedValue.value
//         }
//         let previous = this.head
//         for(let i = 1; i < this.size -1 -index; i++){
//             previous = previous.next
//         }
//         let removedValue = previous.next 
//         previous.next = removedValue.next
//         this.size--
//         return removedValue.value
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
//                 listValues += `${current.value}-> `
//                 current = current.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list = new linkedList()
// list.append(50)
// list.prepend(45)
// list.append(55)
// list.append(60)
// list.prepend(40)
// list.append(65)
// list.append(70)
// list.print()
// console.log(list.removeLast(6))
// list.print()















// let array = [10,15,20,25,30,35]
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
//             node.next = previous.next
//             previous.next = node
//         }
//         this.size++
//     }
//     last(index){
//         if(index < 0 || index > this.size){
//             return null
//         }
//         if(this.size -1 -index == 0){
//             let removedValue = this.head
//             this.head = this.head.next
//             this.size--
//             return removedValue.value
//         }
//         let previous = this.head
//         for(let i = 1; i < this.size -1 -index; i++){
//             previous = previous.next
//         }
//         let removedValue = previous.next
//         previous.next = removedValue.next
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
// for(let i = 0; i < array.length; i++){
//     list.append(array[i])
// }
// list.print()
// console.log(list.last(5))
// list.print()