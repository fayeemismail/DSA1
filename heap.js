//----------------------------------------MIN HEAP


// class minHeap {
//     constructor(){
//         this.heap = []
//     }
//     getParent(index){
//         return Math.floor((index - 1)/2)
//     }
//     getLeftChild(index){
//         return 2 * index + 1
//     }
//     getRightChild(index){
//         return 2 * index + 2
//     }
//     swap(index1, index2){
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapUp()
//     }
//     heapUp(){
//         let index = this.heap.length -1
//         while(index > 0){
//             let parent = this.getParent(index)
//             if(this.heap[index] < this.heap[parent]){
//                 this.swap(index, parent)
//                 index = parent
//             } else {
//                 break
//             }
//         }
//     }
//     getMin(){
//         return this.heap
//     }
// }
// const min = new minHeap()
// min.insert(2)
// min.insert(3)
// min.insert(4)
// min.insert(5)
// min.insert(1)
// console.log(min.getMin())



//-------------------------------------------------MAX HEAP


// class maxHeap {
//     constructor(){
//         this.heap = []
//     }
//     getParent(index){
//         return Math.floor((index - 1)/2)
//     }
//     getLeftChild(index){
//         return 2 * index + 1
//     }
//     getRightChild(index){
//         return 2 * index + 2
//     }
//     swap(index1, index2){
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapUp()
//     }
//     heapUp(){
//         let index = this.heap.length -1
//         while(index > 0){
//             let parent = this.getParent(index)
//             if(this.heap[index] > this.heap[parent]){
//                 this.swap(index, parent)
//                 index = parent
//             } else {
//                 break
//             }
//         }
//     }
//     getMax(){
//         return this.heap
//     }
// }
// const max = new maxHeap()
// max.insert(2)
// max.insert(3)
// max.insert(4)
// max.insert(5)
// max.insert(1)
// console.log(max.getMax())