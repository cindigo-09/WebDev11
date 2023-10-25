// Formulation 

function calculate() {
    var shape = document.getElementById("shape").value;
    var result = document.getElementById("result");
    if (document.getElementById("shape").value === ""){ 
        document.getElementById('button').disabled = true;
    } else if (shape === "circle") { // to get circle circumference
        var diameter = parseInt(document.getElementById("diameter").value);
        var radius = diameter / 2;
        var circumferenceDiameter = Math.PI * diameter; 
        var circumferenceRadius = 2 * Math.PI * radius;

        result.innerHTML = "Circumference (Diameter): " + circumferenceDiameter + "<br>"; // break line
        result.innerHTML += "Circumference (Radius): " + circumferenceRadius;
    } else if (shape === "rectangle") { // to get area & perimeter
        var width = parseInt(document.getElementById("width").value);
        var length = parseInt(document.getElementById("length").value);
        var area = width * length;
        var perimeter = 2 * (length + width);

        result.innerHTML = "Area: " + area + "<br>"; // break line
        result.innerHTML += "Perimeter: " + perimeter;
    } else if (shape === "square") { // to get area & perimeter
        var side = parseInt(document.getElementById("side").value);
        var area = side * side;
        var perimeter = 4 * side;

        result.innerHTML = "Area: " + area + "<br>"; // break line
        result.innerHTML += "Perimeter: " + perimeter;
    } else  {
        document.getElementById('button').disabled = false;
    }
    document.getElementById('value').innerHTML = `<h3>${result.innerHTML}</h3>`; // to show the result
    document.getElementById('mdl').style.display = 'block';
} // modal
document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('mdl').style.display = 'none';

});

// Inputs & Functions

document.getElementById("circInput").style.display = "none";
        document.getElementById("rectInput").style.display = "none";
        document.getElementById("squaInput").style.display = "none";

        document.getElementById("shape").addEventListener("change", function() {
            var selectedShape = this.value;

            document.getElementById("circInput").style.display = "none";
            document.getElementById("rectInput").style.display = "none";
            document.getElementById("squaInput").style.display = "none";

            if (selectedShape === "circle") {
                document.getElementById("circInput").style.display = "block";
            } else if (selectedShape === "rectangle") {
                document.getElementById("rectInput").style.display = "block";
            } else if (selectedShape === "square") {
                document.getElementById("squaInput").style.display = "block";
            }
        });