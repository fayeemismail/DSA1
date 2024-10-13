// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearchTree {
//     constructor(){
//         this.root = null
//     }
    
//     insert(value){
//         const node = new Node(value)
//         if(this.root == null){
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node){
//         if(root.value > node.value){
//             if(root.left == null){
//                 root.left = node
//             } else {
//                 this.insertNode(root.left , node)
//             }
//         } else {
//             if(root.right == null){
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false 
//         } else {
//             if(root.value == value){
//                 return true
//             } else if (root.value > value){
//                 return this.search(root.left , value)
//             } else {
//                 return this.search(root.right, value)
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }
//     levelOrder(root){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length > 0){
//             let current = queue.shift()
//             console.log(current.value)
//             if(current.left){
//                 queue.push(current.left)
//             }
//             if(current.right){
//                 queue.push(current.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root, value)
//     }
//     deleteNode(root, value){
//         if(!root){
//             return null
//         }
//         if(root.value > value){
//             root.left =  this.deleteNode(root.left, value)
//         } else if (root.value < value){
//             root.right = this.deleteNode(root.right, value)
//         } else {
            
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left
//             }
            
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }
//     secondLargest(root){
//         if(!root || (!root.left && !root.right)){
//             return false
//         }
//         let curr = root
//         let parr = null
//         while(curr.right){
//             parr = curr
//             curr = curr.right
//         }
        
//         if(curr.left){
//             curr = curr.left
//             while(curr.right){
//                 curr = curr.right
//             }
//             return curr.value
//         }
//         return parr ? parr.value : null
//     }
// }


// const bst = new binarySearchTree()
// bst.insert(20)
// bst.insert(25)
// bst.insert(30)
// bst.insert(10)
// bst.insert(5)
// bst.insert(7)

// console.log(bst.secondLargest(bst.root))


// console.log(bst.search(bst.root, 10))
// bst.inOrder(bst.root)
// console.log(bst.search(bst.root, 10))
// bst.delete(10)
// console.log(bst.search(bst.root, 10))
// bst.inOrder(bst.root)
// console.log(bst.search(bst.root, 10))
// console.log(bst.max(bst.root))











//--------------------------------------------------------DUPLICATE TREE----------------


// class Tree {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// function same(first, second){
//     if(first == null && second == null){
//         return true
//     }
//     if(first == null || second == null){
//         return false
//     }

//     return (first.value == second.value)&&
//     same(first.left, second.left)&&
//     same(first.right, second.right)
// }


// const first = new Tree(10)
// first.left = new Tree(5)
// first.left.left = new Tree(3)
// first.right = new Tree(15)

// const second = new Tree(10)
// second.left = new Tree(5)
// second.left.left = new Tree(3)
// second.right = new Tree(15)



// console.log(same(first, second))