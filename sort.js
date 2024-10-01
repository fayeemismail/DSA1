//---------------------------------------------------BUBBLE SORT-----------------------------------------------------------


// function bubble(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }
// const array = [4,3,2,6,8,0,1]
// bubble(array)
// console.log(array)


//-------------------------------------------------INSERTION SORT-------------------------------------------------------
    
    
    // function insertion(arr){
    //     for(let i = 1; i < arr.length; i++){
    //         let nti = arr[i]
    //         let j = i - 1
    //         while(j >= 0 && arr[j] > nti){
    //             arr[j+1] = arr[j]
    //             j--
    //         }
    //         arr[j+1] = nti
    //     }
    // }
    // let array = [1,0,3,2,5,4]
    // insertion(array)
    // console.log(array)
    
    
    
    
    
    
    //-------------------------------------------------QUICK SORT---------------------------------------------------------
    
    
    
    // function quick(arr){
    //     if(arr.length < 2){
    //         return arr
    //     }
    //     let piviot = arr[0]
    //     let left = []
    //     let right = []
    //     for(let i = 1; i < arr.length; i++){
    //         if(arr[i] > piviot){
    //             right.push(arr[i])
    //         }else{
    //             left.push(arr[i])
    //         }
    //     }
    //     return [...quick(left), piviot, ...quick(right)]
    // }
    // let array = [6,2,5,1,4,3]
    // console.log(quick(array))








//-------------------------------------------------------SELECTION---------------------------------------------------------


// function selection(arr){
//     for(let i = 0; i < arr.length; i++){
//         let min = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[i]){
//                 min = j
//             }
//         }
//         if(min !== i){
//             [arr[i], arr[min]] = [arr[min], arr[i]]
//         }
//     }
// }
// selection(array)
// console.log(array)





//--------------------------------------------------------------MERGE SORT-----------------------------------------------------


// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }
// function merge(left,right){
//     let sorted = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted, ...left, ...right]
// }
// console.log(mergeSort(array))





