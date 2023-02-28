function contamination(text, char){
    let myStr = "";
    for(let i = 0; i < text.length;i++){
        myStr = myStr + char;
    }
    return myStr;
}

console.log(contamination("abc","z")); // "zzz"
console.log(contamination("","z")); // ""
console.log(contamination("abc","")); // ""
console.log(contamination("_3ebzgh4","&")); // "&&&&&&&&"
console.log(contamination("//case"," ")); // "      "