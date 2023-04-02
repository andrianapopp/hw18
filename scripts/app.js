const arr = [1, 2, 3, -1, -2, -3];

function positiveNumbers(arr){
    const exampleArr = []
    if (arr.length === 0){
        return `Error`
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i])
        }
    }
    return exampleArr.length > 0 ? exampleArr : null
}
positiveNumbers(arr)
