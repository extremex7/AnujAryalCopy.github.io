var rudyTimer = (function(){
    let delay = setInterval(() => {
            document.getElementById("output").innerHTML = "Rudy!";
    }, 3000);
    return delay;
})();