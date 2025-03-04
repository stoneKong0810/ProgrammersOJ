function solution(my_string) {
    return [...my_string]
        .map(Number)
        .filter(v => !isNaN(v))
        .sort((a, b) => a - b);
}