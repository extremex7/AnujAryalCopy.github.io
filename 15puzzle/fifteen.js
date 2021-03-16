var empty = new emptyDiv(300, 300);
var moves = 0;

window.onload = function(){
    init();
    
    $('#shufflebutton').click(function(){
        shuffle();
    });
    $("#puzzlearea div").hover(function(){
        if(isMovable($(this))){
            $(this).addClass("movablepiece");
        }
    }, function(){
            $(this).removeClass("movablepiece");
    });
    $("#puzzlearea div").click(function(){
        if($(this).hasClass("movablepiece")){
            moves += 1;
            move($(this));
        }      
    });
   
}

function emptyDiv(a, b){
    this.top = a;
    this.left = b;
}

function init() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.id = x + 10*y;
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        
}

function shuffle(){
    var count = 0;
    do {
        shuffleHelper();
        count++;
    } while(count != 50);
}

function shuffleHelper(){
    var divs = [];
    $("#puzzlearea div").each(function(){
        if(isMovable($(this)))
            divs.push($(this));
    });
    var rand = parseInt(Math.random()*divs.length);
    move(divs[rand]);
}


function isMovable(div){
    var divLeft = parseInt(div.css('left'));
    var divTop = parseInt(div.css('top'));

    if(divLeft+100 == empty.left && divTop == empty.top ||
        divLeft-100 == empty.left && divTop == empty.top ||
        divLeft == empty.left && divTop+100 == empty.top ||
        divLeft == empty.left && divTop-100 == empty.top 
    ) {
            return true;
        }
    return false;
}

function move(div){
    var divLeft = parseInt(div.css('left'));
    var divTop = parseInt(div.css('top'));
    if(divLeft+100 == empty.left && divTop == empty.top){
        moveRight(div);
    } else if(divLeft-100 == empty.left && divTop == empty.top){
        moveLeft(div);
    } else if(divLeft == empty.left && divTop+100 == empty.top ){
        moveDown(div);
    } else {
        moveUp(div);
    }
    if(isSolution()){
        alert("You Win in " + moves  + " moves");
    }
}

function moveLeft(div){
    if((parseInt(div.css('left'))-100) != -100){
        div.css('left', (parseInt(div.css('left'))-100 + 'px'));
        empty.left += 100;
    }
}

function moveRight(div){
    if((parseInt(div.css('left'))+100) != 400){
        div.css('left', (parseInt(div.css('left'))+100 + 'px'));
        empty.left -= 100; 
    }
}

function moveUp(div){
    if((parseInt(div.css('top'))-100 != -100)){
        div.css('top', (parseInt(div.css('top'))-100 + 'px'));
        empty.top += 100;
    }
}

function moveDown(div){
    if(parseInt(div.css('top'))+100 != 400){
        div.css('top', (parseInt(div.css('top'))+100 + 'px'));
        empty.top -= 100;
    } 
}

function isSolution(){
    var bool = true;
    $("#puzzlearea div").each(function(){
            var x = parseInt($(this).css('left')); 
            var y = parseInt($(this).css('top'));
            
            if(x + 10*y - parseInt($(this).attr('id'))!=0)
                bool = false;
            else 
                bool = (bool==false) ? false : true;
    });
    return bool;
}
