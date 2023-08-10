

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return "Please provide a valid Array"
    } else {
        totalTaka = 0;
        for (let i = 0; i < changeArray.length; i++) {
            totalTaka += changeArray[i];
        }
        if (totalTaka >= totalDue) {
            return true
        } else {
            return false
        }
    }
}
const arr = []
const num = 10;
console.log(canPay(arr, num))