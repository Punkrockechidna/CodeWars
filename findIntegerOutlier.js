intInput = [1, 35, 3, 2, 5, 11];

findOutlier(intInput);
function findOutlier(intInput){
    var result;
     const newArr = integers;
     var oddArray = [];
     var evenArray = [];
     newArr.forEach(element => {
 
         if ((element / 2) % 1 != 0) {
             oddArray.push(element);
         } else {
             evenArray.push(element);
         }
         if (evenArray.length > 1 && oddArray.length > 0) {
             result = oddArray[0];
         }
         else if (oddArray.length > 1 && evenArray.length > 0) {
             result = evenArray[0];
         }
     });
     return result;
 }
//  Other answers from codewars
// function findOutlier(integers){
//     return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
//   }
//   function even(num){
//     return (num % 2 == 0);
//   }
//   function odd(num){
//     return !even(num)
//   }


// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }