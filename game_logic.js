$(document).ready(function(){
    cardAppend();
    dynamicCardSuffle(card_faces);
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

function cardAppend(){
    var frontCard1 = $('<div>').addClass('front1 playerCard');
    var frontCard2 = $('<div>').addClass('front2 playerCard');
        $('.player-div').append(frontCard1,frontCard2);
}


// function playerCount(){
//     playerNum++;
//     // $(element).find('.playerCard > img').hide();
//     // console.log(playerNum);
//     dynamicCardSuffle(card_faces);
//     //return playerNum;
// }
function dynamicCardSuffle(old_array) {
    var player = 3;
    var usedArray = [];
    var new_array = [];                                    // empty array variable created
    var card_faces_length = old_array.length;             //card face length created and value assigned to selected cards count
    for (var i = 0; i < card_faces_length; i++) {           //for loop for looping to cards
        //var current_length = card_faces_length;             //current length assigned to card faces length
        var num = Math.floor(Math.random() * old_array.length); //math floor and math random function for getting number
        var temp = (old_array.splice(num, 1));                  //splice that number from old array and store in temp variable
        new_array.push(temp[0]);                            //push that temp store num image in to new_array for shuffle cards
    }
    console.log(new_array);

    for(var j = 0; j < player; j++) {               //one more for loop for appending new arrays images to front card
        var front1Img = new_array[j];
        var front2Img = new_array[51 - j];

        $('.card' + j  + '>.front1').append('<img src="' + front1Img + '">');     //append images to front card
        $('.card' + j  + '>.front2').append('<img src="' + front2Img + '">');

        usedArray.push(front1Img);
        usedArray.push(front2Img);
        var remainingNewArray = [];
        remainingNewArray = (new_array.slice(player*2));
        console.log(usedArray);

    }

    tableCardShuffle(remainingNewArray);

}

// function playMoney(){
//     var remainingCardsArray = dynamicCardSuffle()
// }

function tableCardShuffle(remainingCards){
    console.log(remainingCards);
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
    var tableCards = 5;
    for (var j = 0; j < tableCards; j++) {
            $('.tableFrontCard' + j  + '').append('<img src="' + remainingCards[j] + '">');     //append images to front card
        }

}


    //dynamicCardSuffle(card_faces);



