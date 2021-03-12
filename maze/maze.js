$(document).ready(function(){
    $("#start").click(function(){
        gameOn();
    });
});

function gameOn(){
    
    $("#status").html("Game On!!!");
    $("div.boundary").removeClass("youlose");

    $("div.boundary").hover(gameOver);
    $("#end").hover(gameWin);
    $("#maze").mouseleave(gameOver);
}

function gameOver(){
    if($("#status").text() == "Game On!!!"){
        $("#status").html("You Lose!!! Try Again by Clicking S");
        $("div.boundary").addClass("youlose");
    }
}

function gameWin(){
    if($("#status").text() == "Game On!!!"){
        $("#status").html("You Win!!!");
    }
}