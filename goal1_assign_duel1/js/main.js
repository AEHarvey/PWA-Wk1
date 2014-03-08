/**
 Name: Amy Harvey
 Date: 3/5/14.
 Assignemt: PWA1 Goal1: Assignment: Duel1
 */

//self-executing function
(function(){

  console.log("FIGHT!!!!")

   //players names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //players health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round=1;

    function fight(){
        console.log("in the fight function");

        alert(playerOneName + ":" + playerOneHealth + "*START*" + playerTwoName + ":" + playerTwoHealth);


        for(var i=0; i<10; i++){
            //random formula is - Math.floor(math.random() * (max - min) + min
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;

            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            console.log(f1);
            console.log(f2);
        }

    };
    function winnerCheck(){
        //codes goes here

    };

    /******this is where the program actually begins****/
    console.log("program starts here")
    fight();



})();