function solution(my_string) {
    return my_string
        .split('')
        .filter((v) => !isNaN(v))
        .reduce((acc, num) => acc + +num, 0)
}