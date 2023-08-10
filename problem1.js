function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please provide a number"
    } else {
        const output = Math.pow(number, 3);
        return output;
    }
}
const output = (cubeNumber("sh"));
console.log(output);