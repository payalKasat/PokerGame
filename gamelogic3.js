
var playerNum = 0;
var usedTableArray =[];
var remainingNewArray =[];
var can_click = true;  //flag veriable
var gameOn = false;

var test = '{"cards":[' +
    '{"name":"h1","src":"images/h1.png","number": "1" },' +
    '{"name":"h2","src":"images/h2.png","number": "2" },' +
    '{"name":"h3","src":"images/h3.png","number": "3" },' +
    '{"name":"h4","src":"images/h4.png","number": "4" },'+
    '{"name":"h5","src":"images/h5.png","number": "5" },' +
    '{"name":"h6","src":"images/h6.png","number": "6" } ,'+
    '{"name":"h7","src":"images/h7.png","number": "7" },' +
    '{"name":"h8","src":"images/h8.png","number": "8" },' +
    '{"name":"h9","src":"images/h9.png","number": "9" },' +
    '{"name":"h10","src":"images/h10.png","number": "10" },' +
    '{"name":"h11","src":"images/h11.png","number": "11" },' +
    '{"name":"h12","src":"images/h12.png","number": "12" },' +
    '{"name":"h13","src":"images/h13.png","number": "13" },' +
    '{"name":"s1","src":"images/s1.png","number": "1" },' +
    '{"name":"s2","src":"images/s2.png","number": "2" },' +
    '{"name":"s3","src":"images/s3.png","number": "3" },' +
    '{"name":"s4","src":"images/s4.png","number": "4" },' +
    '{"name":"s5","src":"images/s5.png","number": "5" },' +
    '{"name":"s6","src":"images/s6.png","number": "6" },' +
    '{"name":"s7","src":"images/s7.png","number": "7" },' +
    '{"name":"s8","src":"images/s8.png","number": "8" },' +
    '{"name":"s9","src":"images/s9.png","number": "9" },' +
    '{"name":"s10","src":"images/s10.png","number": "10" },' +
    '{"name":"s11","src":"images/s11.png","number": "11" },' +
    '{"name":"s12","src":"images/s12.png","number": "12" },' +
    '{"name":"s13","src":"images/s13.png","number": "13" },'+
    '{"name":"d1","src":"images/d1.png","number": "1" },' +
    '{"name":"d2","src":"images/d2.png","number": "2" },' +
    '{"name":"d3","src":"images/d3.png","number": "3" },' +
    '{"name":"d4","src":"images/d4.png","number": "4" },' +
    '{"name":"d5","src":"images/d5.png","number": "5" },' +
    '{"name":"d6","src":"images/d6.png","number": "6" },' +
    '{"name":"d7","src":"images/d7.png","number": "7" },' +
    '{"name":"d8","src":"images/d8.png","number": "8" },' +
    '{"name":"d9","src":"images/d9.png","number": "9" },' +
    '{"name":"d10","src":"images/d10.png","number": "10"},' +
    '{"name":"d11","src":"images/d11.png","number": "11"},' +
    '{"name":"d12","src":"images/d12.png","number": "12"},' +
    '{"name":"d13","src":"images/d13.png","number": "13" },' +
    '{"name":"c1","src":"images/c1.png","number": "1" },' +
    '{"name":"c2","src":"images/c2.png","number": "2" },' +
    '{"name":"c3","src":"images/c3.png","number": "3" },' +
    '{"name":"c4","src":"images/c4.png","number": "4" },' +
    '{"name":"c5","src":"images/c5.png","number": "5" },' +
    '{"name":"c6","src":"images/c6.png","number": "6" },' +
    '{"name":"c7","src":"images/c7.png","number": "7" },' +
    '{"name":"c8","src":"images/c8.png","number": "8" },' +
    '{"name":"c9","src":"images/c9.png","number": "9" },' +
    '{"name":"c10","src":"images/c10.png","number": "10" },' +
    '{"name":"c11","src":"images/c11.png","number": "11" },' +
    '{"name":"c12","src":"images/c12.png","number": "12" },' +
    '{"name":"c13","src":"images/c13.png","number": "13" }]}';


obj = JSON.parse(test);
var cards = obj.cards;

function cardAppend(){
    var cardDiv = $('<div></div>').addClass('cardDiv col-xs-12 row');
    var CardImg1 = $('<div></div>').addClass('playerCard playerCard1 col-xs-6');
    var CardImg2 = $('<div></div>').addClass('playerCard playerCard2 col-xs-6');
    var backImg = $('<img src="images/card-back.png" class="backImg">');
    var selectBar = $('<select></select>').addClass('moneySelection col-xs-3');
    var options10 = $('<option value="0.10">0.10</option>').addClass('tenCent');
    var options20 = $('<option value="0.20">0.20</option>').addClass('twCent');
    var options50 = $('<option value="0.50">0.50</option>').addClass('fifCent');
    var options1 = $('<option value="1.0">1.0</option>').addClass('oneCent');
    var foldBtn = $('<button>Fd</button>').addClass('foldBtn btn-primary col-xs-4');
    var checkBtn = $('<button>Ch</button>').addClass('checkBtn btn-primary col-xs-4');
    var br = $('<br>');
    var moneyBox = $('<div></div>').addClass('moneyBox col-xs-12');
    $('.player-div').append(cardDiv,foldBtn,checkBtn,selectBar,br,moneyBox);
    $('.moneySelection').append(options10,options20,options50,options1);
    $('.cardDiv').append(CardImg1,CardImg2);
    $('.playerCard').append(backImg);
}

function playerCount(element){
    if(!can_click || $(element).hasClass('lock')){
        return;
    }
    playerNum ++;
    gameOn = true;
    $(element).addClass('lock');
    $(element).addClass('card' + playerNum);
    $(element).find('.foldBtn').addClass('card' + playerNum);

    if((playerNum >= 2) && gameOn == true) {
        // if(gameOn == true){
        //     for(var i =playerNum+1;i <= 11;i++){
        //         $('.card'+i).addClass('disable');
        //     }
        // }
        $('.lock').find('.backImg').hide();
        $('.playerMessage').hide();
        dynamicCardSuffle(cards);
    }
    else{
        $('.insideTableCards').html('<h2 class="playerMessage">3 player needed</h2>');
    }
}

function playMoney(element){
    $(element).prev().hide();
    $(element).hide();
    $(element).nextAll().hide();
}

function tableCardShuffle(remainingCards){
    var tableFrontCard = $('<div></div>').addClass('tableFrontCard0 TFC col-xs-2');
    var tableFrontCard1 = $('<div></div>').addClass('tableFrontCard1 TFC col-xs-2');
    var tableFrontCard2 = $('<div></div>').addClass('tableFrontCard2 TFC col-xs-2');
    var tableFrontCard3 = $('<div></div>').addClass('tableFrontCard3 TFC col-xs-2');
    var tableFrontCard4 = $('<div></div>').addClass('tableFrontCard4 TFC col-xs-2');

    $('.insideTableCards').append(tableFrontCard,tableFrontCard1,tableFrontCard2,tableFrontCard3,tableFrontCard4);
    // var tableCardArray = [];
    // var newTableArrayLength = remainingCards.length;

    // for (var i = 0; i < newTableArrayLength; i++) {           //for loop for looping to cards
    //     var number = Math.floor(Math.random() * remainingCards.length); //math floor and math random function for getting numberber
    //     var temp = (remainingCards.splice(number,1));                  //splice that numberber from old array and store in temp variable
    //     tableCardArray.push(temp[0]);
    //     }
    //console.log(tableCardArray);
    // var tableCards = 5;
    // for (var j = 0; j < tableCards ; j++) {
    //     $('.tableFrontCard' + j  + '').append('<img src="' + remainingCards[j] + '">');     //append images to front card
    // }
    threeCards(remainingCards);
}

function threeCards(tableCardArray) {
    var tableCards = 3;
    $('.success').addClass('btn disabled');
    for (var j = 0; j < tableCards ; j++) {
        var cardname = tableCardArray[j].name;
        var cardnum = tableCardArray[j].number;
        $('.tableFrontCard' + j  + '').append('<img src="' + tableCardArray[j].src + '">').attr({'cardName':cardname,'cardnumber':cardnum});//append images to table front card
        usedTableArray.push(tableCardArray[j]);
    }
    tableCardArray = tableCardArray.slice(j,tableCardArray.length);
    $('.next1card').click(function(){
        oneCard(tableCardArray);
    });
    tableCardsValueArray(usedTableArray);
    playerCardValues(playerNum);
}

function oneCard(oneCardArray) {
    var tableCards = 1;
    $('.next1card').addClass('btn disabled');
    for (var j = 0; j < tableCards ; j++) {
        var cardname = oneCardArray[j].name;
        var cardnum = oneCardArray[j].number;
        $('.tableFrontCard3').append('<img src="' + oneCardArray[j].src + '">').attr({'cardName':cardname,'cardnumber':cardnum});     //append images to front card
        usedTableArray.push(oneCardArray[j]);
    }
    oneCardArray = oneCardArray.slice(j,oneCardArray.length);
    $('.next1moreCard').click(function(){
        oneMoreCard(oneCardArray);
    });
    tableCardsValueArray(usedTableArray);
    playerCardValues(playerNum);
}
function oneMoreCard(nextOneMoreCardArray) {
    var tableCards = 1;
    $('.next1moreCard').addClass('btn disabled');
    for (var j = 0; j < tableCards ; j++) {
        var cardname = nextOneMoreCardArray[j].name;
        var cardnum = nextOneMoreCardArray[j].number;
        $('.tableFrontCard4').append('<img src="' + nextOneMoreCardArray[j].src + '">').attr({'cardName':cardname,'cardnumber':cardnum});     //append images to front card
        usedTableArray.push(nextOneMoreCardArray[j]);
    }
    tableCardsValueArray(usedTableArray);
    gameOn = false;
    playerCardValues(playerNum);
}

function tableCardsValueArray(usedTableCards){
    var tableCardsNumValue =[];
    var tableCardsNameValue =[];
    for(var i =0; i < usedTableCards.length;i++){
        //var cardName = usedTableCards[i].name;
        //var cardNum = usedTableCards[i].number;
        tableCardsNameValue.push(usedTableCards[i].name);
        tableCardsNumValue.push(usedTableCards[i].number);
    }
    //console.log(tableCardsNameValue,tableCardsNumValue);

}
$(document).ready(function(){
    cardAppend();
    //dynamicCardSuffle(obj.cards);
    $('.player-div').click(function(){
        playerCount(this);
    });
    $('.success').click(function () {
        tableCardShuffle(remainingNewArray);
    });

    $('.foldBtn').click(function () {
        playMoney(this);
    });

});



