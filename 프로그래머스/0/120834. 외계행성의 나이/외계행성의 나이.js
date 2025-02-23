function solution(age) {
    let answer = '';
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ,'i', 'j'];
    for (let i = 0; i < String(age).length; i++){
        answer += alphabet[String(age)[i]]
    }
    return answer;
}