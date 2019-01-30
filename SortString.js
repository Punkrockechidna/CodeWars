// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

str = "is2 Thi1s T4est 3a";
result = order(str);
function order(str) {

    words = str.split(' ');
    sortedWords = [];
    words.forEach(element => {
        for (let i = 1; i <= 9; i++) {
            if (element.includes(i)) {
                sortedWords[i] = element;
            }
        }
    });
    var finalStr = "";
    sortedWords.forEach(element => {
        if (element != undefined) { 
        finalStr = finalStr.concat(' ', element);
    }
     });
return finalStr.slice(1);
}

// Clever/best practice

// function order(words){
  
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   }    

// var reg = /\d/;

// function order(words){
//   return words.split(' ').sort(comparator).join(' ');
// }

// function comparator(word, nextWord) {
//   return +word.match(reg) - +nextWord.match(reg)
// }