

function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input"
    } else if (arr[0] === arr[1]) {
        return "equal"
    } else {
        let x = arr[0];
        let y = arr[1]
        if (x < y) {
            const output = [y, x]
            return output
        } else {
            return arr
        }
    }
}
const array = [0, 0]
const output = sortMaker(array);
console.log(output)