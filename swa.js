// sliding window algorithm practices

// Maximum Sum Subarray of Size K

function maxSubarraySum(arr, k){
    let maxSum = 0
    let windowSum = 0;
    let start = 0;
    for(let i=0; i < arr.length; i++){
        windowSum += arr[i];
        if(k == i - start + 1){
            maxSum = Math.max(windowSum, maxSum);
            windowSum = windowSum - arr[start]
            start++;
        }
    }
 
    return maxSum;
}

// console.log(maxSubarraySum([3, 5, 2, 1, 7], 2))

// count occurences of anagrams
// Input: text = gotxxotgxdogt, word = got
// Output : 3

function getAnagramCount(input, word){
    let start = 0;
    let windowStr = '';
    let k = word.length;
    let count = 0;
    for(let i=0; i < input.length; i++){
        windowStr = windowStr + input[i];
        if(i - start + 1 == k){
            const result = isAnagram(windowStr, word);
            if(result) count++;
            start = start + 1;
            windowStr = windowStr.substring(1);
        }
    }
    return count;
}
console.log(getAnagramCount('aabaabaa', 'aaba'))
function isAnagram(str, word){
    if(str.length !== word.length){
        return false;
    }

    let objFrq = {}
    let objFrq2 = {}
    for(let i=0; i< str.length; i++){
        if(objFrq[str[i]]){
            objFrq[str[i]] = objFrq[str[i]] + 1;
        }else {
            objFrq[str[i]] = 1;
        }
    }
    
    for(let i=0; i< word.length; i++){
        if(objFrq2[word[i]]){
            objFrq2[word[i]] = objFrq2[word[i]] + 1;
        }else {
            objFrq2[word[i]] = 1;
        }
    }

    for(let key in objFrq){
        if(objFrq[key] !== objFrq2[key]){
            return false;
        }
    }
    return true;
}

console.log(isAnagram('dre', 'edr'));

