var isAnagram = function (s, t) {
    let arrayT = [];
    let arrayS = [];

    if (s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        arrayT.push(t[i]);
        arrayS.push(s[i]);
    }
    sortedT = (arrayT.sort()).join('');
    sortedS = (arrayS.sort()).join('');

    if (sortedS === sortedT) {
        return true
    } else {
        return false
    }
};

ans = isAnagram("anagram", "margana");
console.log(ans);