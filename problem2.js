
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string"){
        return  "Please  provide valid two string";
    }else{
        const match = string1.includes(string2);
        return  match ;
    }
}
const output = matchFinder("john", 1)
console.log(output);