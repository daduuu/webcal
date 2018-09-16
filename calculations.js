var symbols = ["+", "-", "*", "/"];


//Basic Functions
function mathlog(a, b) {
    if(a < 0){
        a = a % b;
        return a + b;
    }
    else{
        return a % b;
    }
}
function log(a, b = 10) {
    return Math.log(a) / Math.log(b);
}