var empty = new emptyDiv(300, 300);
window.onload = function(){
    init();
    
    $('#shufflebutton').click(function(){
        shuffle();
    });
    $("#puzzlearea div").hover(function(){
        if(isMovable($(this))){
            $(this).addClass("movablepiece");
            $(this).click(function(){
                //check if adjacent div is empty and check move it to empty one
                move($(this));
            });
        }
    }, function(){
        if(isMovable($(this))){
            $(this).removeClass("movablepiece");
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
    // write efficient algorithm later
    
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
    div.removeClass("movablepiece");
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
