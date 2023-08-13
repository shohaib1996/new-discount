function isJavaScriptFile(str){
    if (typeof str !== "string"){
        return "provide a string"
    }else if (str.toLowerCase().endsWith(".js")){
        return true;
    }else {
        return false;
    }

}
let javaScriptFile = isJavaScriptFile(10);
console.log(javaScriptFile);