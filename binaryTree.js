class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        const node = new Node(value)
        if(this.root == null){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if(root.value > node.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        } else {
            if(root.right == null){
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    
    search(root, value){
        if(!root){
            return false
        } else {
            if(root.value == value){
                return true
            } else if (root.value > value) {
                return search(root.left, value)
            } else {
                return search(root.right, value)
            }
        }
    }
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty())

// bst.insert(10)
// bst.insert(15)
// bst.insert(5)

// console.log(bst.search(5))