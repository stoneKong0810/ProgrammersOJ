function solution(box, n) {
    var answer = 0;
    let bottom = Math.floor(box[0] / n) * Math.floor(box[1] / n)
    answer = bottom * Math.floor(box[2] / n)
    return answer;
}