let nums = [6,8,9,5];
let target = 11;

let twoSum = (nums, target) => {

    let currentMinusTargetIndexMap = new Map();
    for(let i = 0; i <= nums.length; i++) {

        let currentElement = nums[i];

        if (currentMinusTargetIndexMap.has(currentElement)) {
            let output = [];
            output[0] = currentMinusTargetIndexMap.get(currentElement);
            output[1] = i;
            return output;
        }
        let currentMinusTarget = target - currentElement;
        currentMinusTargetIndexMap.set(currentMinusTarget, i);
}

return null;
}

let output = twoSum(nums,target);
console.log(output[0] + "," + output[1]);