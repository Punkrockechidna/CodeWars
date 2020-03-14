// var productExceptSelf = function (nums) {

//     let shiftedArray = nums;
//     productArray = [];

//     for (let i = 0; i < nums.length; i++) {
//         temp = nums[0];
//         shiftedArray.shift();
//         productArray.push(shiftedArray.reduce((a, b) => a * b));
//         shiftedArray.push(temp);
//     }
// };


// * O(n) time complexity (2 loops over n elements reduces to O(n))
// * O(1) constant space (problem states that output array does not count as extra space)
// */
function productExceptSelf(nums) {
    let products = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) products[i] = 1;
        else products[i] = products[i - 1] * nums[i - 1];
    }

    let product;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) product = 1;
        else product *= nums[i + 1];

        products[i] *= product;
    }

    return products;
}

productExceptSelf([1, 2, 3, 4]);