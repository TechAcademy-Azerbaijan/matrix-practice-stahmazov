let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
]
let r = 3
let c = 2

let arr = []

for (let i = 0; i < r; i++){
    arr.push([])
    for (let j = 0; j < c; j++){
        arr[i].push(matrix[i][j])
    }
    console.log(arr[i].join(' '))
}
