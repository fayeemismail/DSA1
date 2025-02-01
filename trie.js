// class Node {
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new Node()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }
//             node = node.children[char]
//         }
//         node.isEnd = true
//     }
//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
//     starts(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return true
//     }
    
// }


// let trie = new Trie()
// trie.insert('cat')
// trie.insert('bat')
// trie.insert('fayeem')

// console.log(trie.search('fayeem'))
// console.log(trie.starts('fayy'))








class Node{
    constructor(value){
        this.children = {}
        this.isEnded = false
    }
}
class prefix{
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
        node.isEnded = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnded
    }
    startsWith(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
    auto(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        let items = []
        this.dfs(node, word ,items)
        return items
        
    }
    dfs(node, word, items){
        if(node.isEnded){
            items.push(word)
        }
        for(let char in node.children){
            this.dfs(node.children[char], word + char, items)
        }
    }
}

let trie = new prefix()
trie.insert('apple')
trie.insert('appolo')
trie.insert('attribute')
console.log(trie.startsWith('at'))
console.log(trie.auto('app'))