// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
    
//     hash(key){
//         let total = 0
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
    
//     set(key, value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }
    
//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }
    
//     remove(key){
//         let index = this.hash(key)
//         this.table[index] = undefined
//     }
//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(10)
// table.set('name', 'fayeem') 
// table.set('age', 22)
// table.set('house', 'punnakkal')

// table.display()
// table.set('anme', 'bruce') //HERE THE LETTERS OF NAME AND ANME IS SAME SO THE FAYEEM WILL BE OVERWRITTEN AND THE BRUCE WILL BE ADDED
// // THIS IS CALLED COLLISION 
// table.display()
// console.log(table.get('age'))


// table.remove('age')
// table.display()












// class hashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
    
//     hash(key){
//         let total = 0
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
    
//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         } else {
//             const sameKeyItem = bucket.find(item => item[0] == key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             } else {
//                 bucket.push([key,value])
//             }
//         }
//     }
    
//     get(key){
//         let index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             let sameKeyItem = bucket.find(item => item[0] == key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//     }
    
//     remove(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKeyIndex = bucket.find(item => item[0] == key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem,1))
//             }
//         }
//     }
//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }

// const table = new hashTable(10)
// table.set('name', 'fayeem')
// table.set('age', 22)
// table.set('house', 'punnakkal')

// table.display()
// console.log('------------------------------')

// table.set('mane', 'bruce')
// table.display()






const array = [1,2,3,4,1,2,3,4,5,1,5]
function occurrence(arr){
    let hashTable = {}
    for(let num of arr){
        hashTable[num] = (hashTable[num] || 0) + 1
    }
    
    let occurence = Infinity
    let occureNum = null
    for(let num in hashTable){
        if(occurence > hashTable[num]){
            occurence = hashTable[num]
            occureNum = num
        }
    }
    return occureNum
}
console.log(occurrence(array)) 