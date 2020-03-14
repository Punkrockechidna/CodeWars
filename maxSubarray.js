var maxSubArray = function (nums) {
    //Kadane's algorithm
    //look at element as it's own sub array vs total of full array
    //First time you set start is when subarray is > 0
    //change start when total of subarray < 0
    const totalArray = nums.reduce((a, b) => a + b, 0);
    let currentSum = 0;
    let currentMax = -Infinity;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum > currentMax) {
            currentMax = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }


    }
    ans = nums.length > 1 ? currentMax : nums[0];
    // return [startIndex, endIndex]
    return ans
};

ans = maxSubArray([-2, -1]);
console.log(ans);

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]