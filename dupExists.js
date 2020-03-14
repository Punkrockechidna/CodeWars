var containsDuplicate = function (nums) {
    let ans = false;
    let count = 1;
    let countObj = {};
    dupExists = nums.map((num => {
        // num = int(num);
        if (!countObj[num]) {
            countObj[num] = count;
        } else if (countObj[num]) {
            ans = true;
            return ans
        } else {
            return ans
        }
    }))
    return ans
};

yo = containsDuplicate([1, 1, 1, 1, 5, 6, 7, 8, 9, 100]);