function solution(numbers, direction) {
    var answer = [];
    if(direction === 'left') {
        const shift = numbers.shift();
        numbers.push(shift);
        return numbers;
    } else if (direction === 'right') {
        const pop = numbers.pop();
        numbers.unshift(pop);
        return numbers;
    }
}