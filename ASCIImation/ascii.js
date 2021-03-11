(function(){
    "use strict";

    var interval;

    window.onload = function(){
        setInitials();

        const startButton = document.getElementById("start");
        startButton.addEventListener("click", startAnimation);

        const stopButton = document.getElementById("stop");
        stopButton.addEventListener("click", stopAnimation);

        const animation = document.getElementById("animation");
        animation.addEventListener("change", selectAnimation);

        const size = document.getElementById("size");
        size.addEventListener("change", changeSize);

        const turbo = document.getElementById("turbo");
        turbo.addEventListener("change", changeSpeed);
    }
})();

function setInitials(){
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").value = "Blank";
    document.getElementById("size").value = "Medium";
    document.getElementById("turbo").checked = false;
    document.getElementById("text-box").value = "";
}

function startAnimation(){
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    var animation = document.getElementById("animation").value;
    var data = ANIMATIONS[animation];

    var index = 0;
    var arrayData = data.split("=====\n");

    var delay = getSpeed();

    interval = setInterval(function(){
        document.getElementById("text-box").value = arrayData[index];
        index++;
        if(index >= arrayData.length){
            index = 0;
        }
    }, delay);
}

function stopAnimation(){
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(interval);
}

function selectAnimation(){
    if(document.getElementById("start").disabled === true){
        stopAnimation();
    }
    var animation = document.getElementById("animation").value;
    var data = ANIMATIONS[animation];
    document.getElementById("text-box").value = data;
}

function changeSize(){
    var font = document.getElementById("size").value;
    var fontSize;
    switch(font) {
        case "Tiny":
            fontSize = "7pt";
            break;
        case "Small":
            fontSize = "10pt";
            break;
        case "Large":
            fontSize = "16pt";
            break;
        case "Extra Large":
            fontSize = "24pt";
            break;
        case "XXL":
            fontSize = "32pt";
            break;
        default:
            fontSize = "12pt";
    }
    document.getElementById("text-box").style.fontSize = fontSize;
}

function getSpeed(){
    if(document.getElementById("turbo").checked){
        return 50;
    } else {
        return 250;
    }
}

function changeSpeed(){
    if(document.getElementById("start").disabled === true){
        stopAnimation();
        startAnimation();
    }    
}
