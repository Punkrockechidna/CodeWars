var isAnagram = function (s, t) {
    let reverseS = [];
    for (let i = s.length; i >= 0; i--) {
        reverseS.push(s[i]);
    }
    reverseS = reverseS.join('');

    if (reverseS === t || s === t) {
        return true
    } else {
        return false
    }
};

ans = isAnagram("anagram", "margana");
console.log(ans);