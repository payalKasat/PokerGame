$(document).ready(function(){
    cardAppend();

    // $('.foldCards').click(function () {
    //     dynamicCardSuffle(card_faces);
    //     //$(this).find('.playerCard>img').hide();
    //     //playMoney(this);
    // });

    $('.player-div').click(function(){
        playerCount(this);

        //playMoney();
        //cardDeck();
        //dynamicCardSuffle(oldArray);
    });
    $('.success').click(function () {
        tableCardShuffle();
        threeCards(remainingNewArray);
    });

    $('.foldCards').click(function () {
        playMoney(this);
    });
});


var playerNum = 0;
var card_faces = [
    "images/h1.png",
    "images/h2.png",
    "images/h3.png",
    "images/h4.png",
    "images/h5.png",
    "images/h6.png",
    "images/h7.png",
    "images/h8.png",
    "images/h9.png",
    "images/h10.png",
    "images/h11.png",
    "images/h12.png",
    "images/h13.png",
    "images/s1.png",
    "images/s2.png",
    "images/s3.png",
    "images/s4.png",
    "images/s5.png",
    "images/s6.png",
    "images/s7.png",
    "images/s8.png",
    "images/s9.png",
    "images/s10.png",
    "images/s11.png",
    "images/s12.png",
    "images/s13.png",
    "images/d1.png",
    "images/d2.png",
    "images/d3.png",
    "images/d4.png",
    "images/d5.png",
    "images/d6.png",
    "images/d7.png",
    "images/d8.png",
    "images/d9.png",
    "images/d10.png",
    "images/d11.png",
    "images/d12.png",
    "images/d13.png",
    "images/c1.png",
    "images/c2.png",
    "images/c3.png",
    "images/c4.png",
    "images/c5.png",
    "images/c6.png",
    "images/c7.png",
    "images/c8.png",
    "images/c9.png",
    "images/c10.png",
    "images/c11.png",
    "images/c12.png",
    "images/c13.png"
];
var remainingNewArray = [];
var can_click = true;  //flag veriable
var gameOn = false;

function cardAppend(){
    var cardDiv = $('<div></div>').addClass('cardDiv row');
    var CardImg1 = $('<div></div>').addClass('playerCard playerCard1 col-xs-6');
    var CardImg2 = $('<div></div>').addClass('playerCard playerCard2 col-xs-6');
    var backImg = $('<img src="images/card-back.png" class="backImg">');
    var foldCards = $('<button>Fold</button>').addClass('foldCards btn-primary col-xs-12');
    $('.player-div').append(cardDiv,foldCards);
    $('.cardDiv').append(CardImg1,CardImg2);
    $('.playerCard').append(backImg);

}

function playerCount(element){
    if(!can_click || $(element).hasClass('lock')){
        return;
    }
    playerNum++;
    gameOn = true;
    console.log(card_faces);
    //var foldCards = $('<button>Fold</button>').addClass('foldCards btn-primary col-xs-12');
    $(element).addClass('lock');
    $(element).addClass('card' + playerNum);
    //$(element).find('.foldCards').addClass('card' + playerNum);

    if((playerNum >= 3) && gameOn == true) {
        // if(gameOn == true){
        //     for(var i =playerNum+1;i <= 11;i++){
        //         $('.card'+i).addClass('disable');
        //     }
        // }
        $('.lock').find('.backImg').hide();
        $('.playerMessage').hide();

        dynamicCardSuffle(card_faces);
        console.log(card_faces);
    }
    else{
        $('.insideTableCards').html('<h2 class="playerMessage">3 player needed</h2>');
    }


}
function dynamicCardSuffle(oldArray) {
    var player = playerNum;
    var usedArray = [];
    var new_array = [];                                    // empty array variable created
    var oldArray_length = oldArray.length;             //card face length created and value assigned to selected cards count
    for (var i = 0; i < oldArray_length; i++) {           //for loop for looping to cards
        //var current_length = oldArray_length;             //current length assigned to card faces length
        var num = Math.floor(Math.random() * oldArray.length); //math floor and math random function for getting number
        var temp = (oldArray.splice(num, 1));                  //splice that number from old array and store in temp variable
        new_array.push(temp[0]);                            //push that temp store num image in to new_array for shuffle cards
    }

    for(var j = 1; j <= player; j++) {               //one more for loop for appending new arrays images to front card
        var front1Img = new_array[j - 1];
        var front2Img = new_array[51 - j];
        $('.card' + j  +'>.cardDiv >.playerCard1').append('<img src="' + front1Img + '">');     //append images to front card
        $('.card' + j  + '>.cardDiv >.playerCard2').append('<img src="' + front2Img + '">');
        usedArray.push(front1Img);
        usedArray.push(front2Img);
        remainingNewArray = (new_array.slice(player*2));
    }
}


function playMoney(element){
    $(element).prev().hide();
    $(element).hide();

}

function tableCardShuffle(){
    //console.log(remainingCards);
    var tableFrontCard = $('<div></div>').addClass('tableFrontCard0 TFC col-xs-2');
    var tableFrontCard1 = $('<div></div>').addClass('tableFrontCard1 TFC col-xs-2');
    var tableFrontCard2 = $('<div></div>').addClass('tableFrontCard2 TFC col-xs-2');
    var tableFrontCard3 = $('<div></div>').addClass('tableFrontCard3 TFC col-xs-2');
    var tableFrontCard4 = $('<div></div>').addClass('tableFrontCard4 TFC col-xs-2');

    $('.insideTableCards').append(tableFrontCard,tableFrontCard1,tableFrontCard2,tableFrontCard3,tableFrontCard4);
    // var tableCardArray = [];
    // var newTableArrayLength = remainingCards.length;

    // for (var i = 0; i < newTableArrayLength; i++) {           //for loop for looping to cards
    //     var num = Math.floor(Math.random() * remainingCards.length); //math floor and math random function for getting number
    //     var temp = (remainingCards.splice(num,1));                  //splice that number from old array and store in temp variable
    //     tableCardArray.push(temp[0]);
    //     }
    //console.log(tableCardArray);
    // var tableCards = 5;
    // for (var j = 0; j < tableCards ; j++) {
    //     $('.tableFrontCard' + j  + '').append('<img src="' + remainingCards[j] + '">');     //append images to front card
    // }
    //threeCards(remainingCards);

}
function threeCards(tableCardArray) {
    var tableCards = 3;
    $('.success').addClass('btn disabled');
    for (var j = 0; j < tableCards ; j++) {
        $('.tableFrontCard' + j  + '').append('<img src="' + tableCardArray[j] + '">');//append images to front card

    }
    let nextOneCardArray = tableCardArray.slice(j,tableCardArray.length);
    $('.next1card').click(function(){
        oneCard(nextOneCardArray);
    });
}
//
function oneCard(oneCardArray) {
    var tableCards = 1;
    $('.next1card').addClass('btn disabled');
    for (var j = 0; j < tableCards ; j++) {
        $('.tableFrontCard3').append('<img src="' + oneCardArray[j] + '">');     //append images to front card
    }
    let nextOneMoreCardArray = oneCardArray.slice(j,oneCardArray.length);
    $('.next1moreCard').click(function(){
        oneMoreCard(nextOneMoreCardArray);
    });
}
function oneMoreCard(nextOneMoreCardArray) {
    var tableCards = 1;
    $('.next1moreCard').addClass('btn disabled');
    for (var j = 0; j < tableCards ; j++) {
        $('.tableFrontCard4').append('<img src="' + nextOneMoreCardArray[j] + '">');     //append images to front card
    }
    gameOn = false;
}





