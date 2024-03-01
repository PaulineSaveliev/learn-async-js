const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow(arr, row) {
    return new Promise((resolve, reject) => {
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let j = 0; j < arr[row].length; j++) {
                    sum += arr[row][j];
                }
                console.log('resolving ... ');
                resolve(sum)
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    })
}

async function calculateSum() {
    const rowSumPromises = [];
    for (let i = 0; i < arr.length; i++) {
        rowSumPromises[i] = sumOfARow(arr, i);
    }
    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach((rowSum) => {
            sum += rowSum;
        });
        console.log(`Sum = ${sum}`);
        return 'done';
    } catch (error) {
        console.log(`Error Msg: ${error}`);
        return 'error';
    }
}

calculateSum.then((status) => console.log(status));