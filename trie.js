class Node {
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }
    starts(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
    
}


let trie = new Trie()
trie.insert('cat')
trie.insert('bat')
trie.insert('fayeem')

console.log(trie.search('fayeem'))
console.log(trie.starts('fayy'))

