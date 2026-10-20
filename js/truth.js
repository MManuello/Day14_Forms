let fname = "";

function greet() {
    let greetparagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    greetparagraph.innerHTML = "Greetings " + fname + " " + lname + ", you are " + age + " years old!";
}

function trivia1() {
    let triviaAnwser = document.getElementById("trivia1-anwser");
    fname = document.getElementById("fname").value;
// get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
// give result based on what they selected
    if (chocolateSelected) {
        triviaAnwser.innerHTML = fname + ", you are wrong, sweet tooth?";
    }
    else if (tunaSelected) {
        triviaAnwser.innerHTML = fname + ", you are wrong, rotten tuna?!";
    }
    else if (honeySelected) {
        triviaAnwser.innerHTML = fname + ", you are correct, healthy!";
    }

}

// the id of the lie - change this if a different one is the lie
let lie = "rocket";

function truthLie() {
    let ttlAnswer = document.getElementById("ttl-answer");
    fname = document.getElementById("fname").value;
// find which one they selected
    let selected = "";
    if (document.getElementById("ski").checked) { selected = "ski"; }
    else if (document.getElementById("bone").checked) { selected = "bone"; }
    else if (document.getElementById("rocket").checked) { selected = "rocket"; }
// give result, background turns green or red
    if (selected == "") {
        ttlAnswer.innerHTML = "Pick an answer first.";
    }
    else if (selected == lie) {
        ttlAnswer.innerHTML = "Correct, " + fname + ". That one was the lie. My rocket engine makes 100N of thrust, not 80N.";
        document.body.style.backgroundColor = "lightgreen";
    }
    else {
        ttlAnswer.innerHTML = "Wrong, " + fname + ". That one is true.";
        document.body.style.backgroundColor = "lightcoral";
    }
}

// round 2: hydrogen - the id of the lie
let lie2 = "leak";

function truthLie2() {
    let ttl2Answer = document.getElementById("ttl2-answer");
    fname = document.getElementById("fname").value;
// find which one they selected
    let selected = "";
    if (document.getElementById("h2gen").checked) { selected = "h2gen"; }
    else if (document.getElementById("esp").checked) { selected = "esp"; }
    else if (document.getElementById("leak").checked) { selected = "leak"; }
// give result, background turns green or red
    if (selected == "") {
        ttl2Answer.innerHTML = "Pick an answer first.";
    }
    else if (selected == lie2) {
        ttl2Answer.innerHTML = "Correct, " + fname + ". That one was the lie. Version 1 leaked, so I had to redesign it.";
        document.body.style.backgroundColor = "lightgreen";
    }
    else {
        ttl2Answer.innerHTML = "Wrong, " + fname + ". That one is true.";
        document.body.style.backgroundColor = "lightcoral";
    }
}
