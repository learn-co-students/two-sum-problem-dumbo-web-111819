function bruteForceTwoSum(arr,target){
    // console.log(arr)
    // console.log(target)
    let length = arr.length;
    let answer = []
    let counter = 1
   for(let i =0; i < length; i++){
     for(let j = 0; j < length;j++){
       console.log(answer.find(set => set === [arr[i],arr[j]]))
         if(arr[i] + arr[j] === target){
           answer.push([arr[i],arr[j]])
         }
       
     }
   }
   return answer
}