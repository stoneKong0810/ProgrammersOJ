function solution(cipher, code) {
    var answer = [];
    var arr = cipher.split('');
    for(let i = 0; i < arr.length; i++) {
        if((i + 1) % code === 0) {
            answer.push(arr[i])
        }
    }
    return answer.join('')
}