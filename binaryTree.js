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
























class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class binarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if(this.root == null){
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if(root.value > node.value){
            if(root.left == null){
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(root.right == null){
                root.right = node
            } else {
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        } else {
            if(root.value == value){
                return true
            } else if (root.value > value){
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    
    preOrder(root){
        if(root){
            console.log(root.value, 'pre')
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value, 'in')
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value, 'post')
        }
    }
    
    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }
}

let bst = new binarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root,5))
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)

console.log('------------')
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))