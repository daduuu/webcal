function read_process() {
    var input = document.getElementById("input_text").value.split(" ");

    if(!(input.includes(")") || input.includes("("))){
        for (var i = 0; i < input.length; i++){
            if(input[i] === "*" || input[i] === "/" || input[i] === "%"){
                if(input[i] === "*"){
                    fix_string(i, input, parseFloat(input[i - 1]) * parseFloat(input[i + 1]));
                    i = 0;
                }
                else if(input[i] === "/"){
                    fix_string(i, input, parseFloat(input[i - 1]) / parseFloat(input[i + 1]));
                    i = 0;
                }
                else if(input[i] === "%"){
                    fix_string(i, input, mathlog(parseFloat(input[i - 1]), parseFloat(input[i + 1])));
                    i = 0;
                }
            }
            else if(input[i] === "+" || input[i] === "-"){
                if(input[i] === "+"){
                    fix_string(i, input, parseFloat(input[i - 1]) + parseFloat(input[i + 1]));
                    i = 0;
                }
                else if(input[i] === "-"){
                    fix_string(i, input, parseFloat(input[i - 1]) - parseFloat(input[i + 1]));
                    i = 0;
                }
            }
        }
    }
    return input[0];
}

function fix_string(i, ar, result) {
    ar.splice(i - 1, 0, result);
    ar.splice(i, 3);
}

function output_result() {
    var output = read_process();
    document.getElementById("output_text").value = output;
}