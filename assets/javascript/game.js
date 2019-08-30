//elemetal variables

var directElemental = document.getElementById("directElemental");
var userElemental = document.getElementById("userElemental");
var winsElemental = document.getElementById("winsElemental");
var lossElemental = document.getElementById("lossElemental");

//setting up words and word mechanics
var werds = [
    "snowcrash",
    "cyberspace",
    "shadowrun",
    "countzero",
    "wilson"
]

var werd = werds[Math.floor(Math.random() * werds.length)];

var ansKey = [];
for (var i = 0; i < werd.length; i++) {
    ansKey[i] = "_";
}



    


