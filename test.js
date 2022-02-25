// bài 1
let arr = [2, -22, -22, 100, 9, -10];
function calculate(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i] * arr[i + 1]) {
            max = arr[i] * arr[i + 1];
        }
    }

    console.log(max);
}
calculate(arr);
// bài 2
const WeightInput = [80, 60, 70, 50, 40, 30];

function calculateWeight(arr) {
    let totalWeight = []
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            team1 += arr[i]
        } else {
            team2 += arr[i]
        }
    }
    totalWeight.push(team1)
    totalWeight.push(team2)
    return totalWeight;
}
console.log(calculateWeight(WeightInput))
