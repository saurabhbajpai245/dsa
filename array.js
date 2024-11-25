// get the value of pascal triangle when r and c is giving

function nCr(n, r){
    let res = 1;
    for(let i=0; i < r; i++){
        res = res*(n-i);
        res = res/(i+1);
    }
    return res;
}

function getValueOfPascalTriangle(r,c){
    const element = nCr(r-1, c-1);
    return element;
}

// const result = getValueOfPascalTriangle(5, 3);
// console.log(result);

// get the row of pascal triangle when n is giving

function getPascalTriRow(n){
    // for(let c=1; c<=n;c++){
    //     console.log(nCr(n-1,c-1))
    // }
    // or
    let ans = 1;
    console.log(ans, )
    for(let i=1; i < n;i++){
        ans = ans*(n-i);
        ans = ans/i
        console.log(ans , ' ,')
    }
}
// getPascalTriRow(5)

// print pascal triangle 


function generateRow(row) {
    let ans = 1;
    let ansRow = [1]; // inserting the 1st element
  
    // calculate the rest of the elements:
    for (let col = 1; col < row; col++) {
      ans = ans * (row - col);
      ans = ans / col;
      ansRow.push(ans);
    }
    return ansRow;
}
  
function pascalTriangle(n) {
    let ans = [];

    // store the entire pascal's triangle:
    for (let row = 1; row <= n; row++) {
        ans.push(generateRow(row));
    }
    return ans;
}
  
// let n = 5;
// let ans = pascalTriangle(n);
// for (let i = 0; i < ans.length; i++) {
//     console.log(ans[i].join(" "));
// }

function nextPermutation(arr){
    // first step to find the number which is small then rest of his right side
    let idx = -1;
    let n = arr.length;
    for(let i=n - 2; i >= 0; i--){
        if(arr[i] < arr[i+1]){
            idx = i;
            break;
        }
    }
    if(idx == -1){
        return arr.reverse();
    }

    for(let i = n-1; i > idx; i--){
        if(arr[i] > arr[idx]){
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
            break;
        }
    }
    
    const output = reverse(arr, idx+1, n-1);
    
    return output;

}


// const result = nextPermutation([2,1,5,4,3,0,0]);
// console.log(result);

function reverse(arr, i , j){
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
        
    }
    return arr;
}

// Maximum subarray sum equals 0

function kadanesAlgo(arr){
    let maxi = Number.MIN_SAFE_INTEGER;
    let sum =0;

    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
        if(sum > maxi){
            maxi = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return maxi;
}

const result = kadanesAlgo([-2,1,-3,4,-1,2,1,-5,4]);
console.log(result);