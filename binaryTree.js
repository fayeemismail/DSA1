// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree {
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root == null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.root == null){
//             this.root = node
//         }else{
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node){
//         if(root.value > node.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if(root.right == null){
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }
    
//     search(root, value){
//         if(!root){
//             return false
//         } else {
//             if(root.value == value){
//                 return true
//             } else if (root.value > value) {
//                 return this.search(root.left, value)
//             } else {
//                 return this.search(root.right, value)
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree()
// console.log(bst.isEmpty())

// bst.insert(10)
// bst.insert(15)
// bst.insert(5)

// console.log(bst.search(bst.root, 20))











//--------------------------------------------------------BFS and DFS-------------------------------------------------------





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
//     insertNode(root,node){
//         if(root.value > node.value){
//             if(root.left == null){
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if(root.right == null){
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }
//     search(root, value){
//         if(!root){
//             return false
//         } else {
//             if(root.value == value){
//                 return true
//             } else if (root.value > value){
//                 return this.search(root.left, value)
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
    
//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
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
// }

// const bst = new binarySearchTree()
// bst.insert(10)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,20))
// bst.preOrder(bst.root)
// console.log('------------------')
// bst.inOrder(bst.root)
// console.log('------------------')
// bst.postOrder(bst.root)
// console.log('----------BFS-----------')
// bst.levelOrder()
























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
//     insertNode(root,node){
//         if(root.value > node.value){
//             if(root.left == null){
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
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
//                 return this.search(root.left, value)
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
//         while(queue.length){
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
//         this.root = this.deleteNode(this.root,value)
//     }
    
//     deleteNode(root, value){
//         if(root == null){
//             return root
//         }
//         if(root.value > value){
//                     root.left = this.deleteNode(root.left, value)
//         } else if(root.value < value){
//             root.right = this.deleteNode(root.right, value)
//         } else {
//             if(!root.left && !root.right){
//                 return null
//             }
            
//             if(!root.left){
//                 return root.right
//             } else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }
    
// }


// const bst = new binarySearchTree()
// bst.insert(10)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(12)

// console.log(bst.search(bst.root,110))
// bst.postOrder(bst.root)
// console.log(bst.max(bst.root))

// bst.levelOrder(bst.root)

// bst.delete(10)
// bst.delete(7)
// bst.levelOrder(bst.root)





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
    
//     insertNode(root,node){
//         if(root.value > node.value){
//             if(root.left == null){
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if(root.right == null){
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }
    
//     search(root, value){
//         if(!root){
//             return false
//         } else {
//             if(root.value == value){
//                 return true
//             } else if(root.value > value){
//                 return this.search(root.left, value)
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
//         queue.push(root)
//         while(queue.length){
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
//         if(root.left){
//            return this.min(root.left) 
//         } else {
//             return root.value
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
//         this.root = this.deleteNode(this.root,value)
//     }
    
//     deleteNode(root,value){
//         if(root == null){
//             return root
//         }
//         if(root.value > value){
//             root.left = this.deleteNode(root.left, value)
//         } else if(root.value < value){
//             root.right = this.deleteNode(root.right, value)
//         } else {
//             if(!root.left && !root.right){
//                 return null
//             }
            
//             if(!root.left){
//                 return root.right
//             } else if (!root.right){
//                 return root.right
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//     }
    
//     secondLargest(root){
//         if(!root || (!root.left && !root.right)){
//             return null
//         }
//         let curr = root
//         while(curr.right){
//             curr = curr.right
//         }
        
//         if(curr.left){
//             curr = curr.left
//             while(curr.right){
//                 curr = curr.right
//             }
//             return curr.value
//         }
        
//         let parent = root 
//         while(parent.right !== curr){
//             parent = parent.right
//         }
//         return parent.value
//     }
    
    
// }



// const bst = new binarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// bst.insert(14)
// console.log(bst.search(bst.root,900))

// bst.inOrder(bst.root)

// console.log(bst.secondLargest(bst.root))