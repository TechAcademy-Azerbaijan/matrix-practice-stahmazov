let matrix = [
    [2, 5, 3, 1, 4],
    [3, 5, 2, 3, 4],
    [4, 6, 1, 2, 3],
    [4, 5, 6, 7, 7]
]

let min = matrix[0][0]


for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] < min) {
            min = matrix[i][j]
        }
    }
}

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        if (min == matrix[i][j]) {
            console.log(i+1)
        }
    }
}
