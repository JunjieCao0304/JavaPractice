let length;
let width;

function calculateArea(){
    legnth = parseFload(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    let area = length * width;
    document.getElementById("result").innerText = "The area of the rectangle is: ${area}";
}