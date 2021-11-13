


// var arr = [1,2,34,5,6,78,4];

// const aaa = (arr) => {
//     for(let j=0;j<arr.length;j++){
//         for(let i =0; i<arr.length-j; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i+1];
//                 arr[i+1] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
    
//     return arr;
// }

// console.log(arr);

var arr = ["1","2","3"];
arr = arr.map(function (data) {
    return +data;
});//此时arr变成[1,2,3]
console.log(arr);
