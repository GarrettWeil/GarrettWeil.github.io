//Take user input of vector variables
var V1L = parseInt(prompt("Length of V1:"), 10);
var V1A = (Math.PI * parseInt(prompt("Angle of V1:"), 10)) / 180;

var V2L = parseInt(prompt("Length of V2:"), 10);
var V2A = (Math.PI * parseInt(prompt("Angle of V2:"), 10)) / 180;

//Find width component
var A1 = V1L * Math.cos(V1A);
var A2 = V2L * Math.cos(V2A);
var A = A1 + A2;

//Find height component
var B1 = V1L * Math.sin(V1A);
var B2 = V2L * Math.sin(V2A);
var B = B1 + B2;

//Use Pythagorean Theorem to find the length of the new vector
var VL = Math.sqrt((A * A) + (B * B));

//Convert result to degrees
var VA = (180 * Math.atan(B/A)) / Math.PI;

//Round all results to the hundreths place
A = Math.round(100*A)/100;
B = Math.round(100*B)/100;

VL = Math.round(100*VL)/100;
VA = Math.round(100*VA)/100;

//Print results
var CFORM = "Component Form is: ( " + A + ", " + B + ").";
var MAFORM = "Mag/Ang Form is ( " + VL + ", " + VA +"˚).";

document.getElementById("results").innerHTML = "Here are your results: <br>" + CFORM + "<br>" + MAFORM + "<br>";