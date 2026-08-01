//call back function

const arr = [1, 2, 3, 4, 5];

const nums = (value, index) => {
    console.log(`index ${index}: ${value}`)
}

arr.forEach(nums);

function findNumber(num) {
    return function(func) {
        const result = [];
        for (let i = 0; i <= num; i++) {
            if (func(i)) {
                result.push(i);
            }
        }
        return result;
    }
}