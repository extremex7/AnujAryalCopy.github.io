document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById("bigger-decoration");
    button.addEventListener("click", biggerFont);

    let checkbox = document.getElementById("bling");
    checkbox.addEventListener("change", getBoldGreenFont);

    let pigLatin = document.getElementById("pig-latin");
    pigLatin.addEventListener("click", toPigLatin);
 }, false);

function biggerFont() {
    let text = document.getElementById("sample-text");
    let style = window.getComputedStyle(text, null).getPropertyValue("font-size");
    let fontSize = parseFloat(style);
    text.style.fontSize = (fontSize + 2) + 'pt';
    setInterval(biggerFont, 500);
}

function getBoldGreenFont() {
    if(this.checked){
        let text = document.getElementById("sample-text");
        text.style.fontWeight = "bold";
        text.style.color = "green";
        text.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(../images/dollarbill.jpg)";
    } else {
        let text = document.getElementById("sample-text");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}

function toPigLatin() {
    let text = document.getElementById("sample-text").value;
    let words = text.split(" ");
    let output = "";
    words.forEach(element => {
        if(output === "") output = toPigLatinHelper(element);
        else output += " " + toPigLatinHelper(element);
    });
    document.getElementById("sample-text").value = output;
}

function toPigLatinHelper(text) {
    if(checkVowel(text)){
        return (text + "ay");
    }
    let begin = text[0];
    let rem = text.substring(1, text.length);
    return toPigLatinHelper(rem + begin);
}

function checkVowel(text){
    if(text[0]=="a"| text[0]=="e"| text[0]=="i"| text[0]=="o"| text[0]=="u" | text[0]=="y"){
        return true;
    }
    return false;
}
