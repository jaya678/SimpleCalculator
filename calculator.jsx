function display(data){
    document.getElementById('output').value += data;
}

function erase(){
    document.getElementById('output').value="";
}

function solve(){
    var calc = document.getElementById('output').value;
    document.getElementById('output').value = eval(calc);
}