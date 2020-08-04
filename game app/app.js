// Function statement or fuction declaration 
// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// let ageJohn = calculateAge(1990);
// let ageMike = calculateAge(1948);
// let ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function expression*****************************************************
/* 
let whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designes a good websites'
        default:
            return firstName + ' does soemthing else'
    }
}

console.log(whatDoYouDo('teacher', 'John')); */


// ARRAYS***************************************************************************
/* let name = ['John', 'Mark', 'Jane'];

name[1] = 'Ben';
name[name.length] = 'Mary';
console.log(name);
 */
// Object literal*************************************************
/* let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'Teacher',
    isMarried: false,
};

let joshua = {
    firstName: 'Joshua',
    lastName: 'Downey',
    birthYear: 1996,
    family: ['Klara', 'Alia', 'Ozod', 'Quvonch'],
    job: 'Webprogrammer'
};

console.log(joshua); */

/* let nick = {
    firstName: 'Nickelar',
    lastName: 'Kurban',
    birthYear: '1992',
    family: ['John', 'Joshua', 'Klark', 'Mushtary'],
    job: 'Trainer',
};

console.log(nick.job); */
// *************************************************************



// new object syntax********************************************
/* let joshua = new Object();
joshua.firstName = 'Ben';
joshua.lastName = 'Afleck';
joshua.birthYear = 1990;
joshua.job = 'Dancer';
console.log(joshua);
 */


/* let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 2001,
    family: [ 'Jane', 'Mark', 'Bob', 'Emily'],
    job: 'Teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john); */
/* 
let john = {
    fullName: 'John Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height)
        return this.bmi;
    }
};
 */

/* let mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height)
        return this.bmi;
    }
};
 */


/* if(john.calcBMI() > mark.calcBMI()) {
    console.log( john.fullName + ' has a higher BMI of ' + john.bmi);
} else if(mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log( ' They have the same BMI ' );
} */

// loops and iterations************************************************************


// for(let i = 0; i <= 10; i += 2) {
//     console.log(i);
// } 

/* let john = [ 'John', 'Smith', 1990, 'designer', false];

for (let i = 2; i < john.length; i++ ) {
    console.log(john[i]);
}

let = i;
while ( i < john.length ) {
        console.log(john[i]);
        i++;
} */

/* let john = [ 'John', 'Smith', 1990, 'Teacher', false];

for ( i = 10; i < john.length; i--) {
    console.log(john[i]);
} */

/* let a = 'Hello';

first();
function first() {
    let b = 'HI';

    second();
    function second() {
        let c = 'Hey';
        // console.log( a + b + c );
    }
}

function third() {
    let d = 'John';
    console.log( a + b + c + d);
} */

// console.log(this);
/* 
function calculateAge (year) {
    console.log( 2016 - year);
    console.log(this);

}

calculateAge(1985); */

/* let scores, roundScore, activePlayer;

init(); */


/* document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1.Random number  method here
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result 
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';

    // 2.Update the round score IF the rolled numberwas not a 1
    if (dice !== 1) {
        // Ddd score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }
}); */

       /*  document.querySelector('.btn-hold').addEventListener('click', function() {
            // add current score to glabal score 
            scores[activePlayer] += roundScore;

            // update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            // check if the player won the game
            if (scores[activePlayer] >= 20) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            } else {
            // Next Player
            nextPlayer();
            }
        }) */

/* function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active')

};
 */
/* document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none'; 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active'); 
}; */


let scores, roundScore, activePlayer,gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
            
            //1.Random number
        let dice = Math.floor( Math.random() * 6) + 1;

        //2.Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';

        //3.Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player turn
            nextPlayer();
        }

    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add the current score to the Gloabal score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the plyaer won the game
        if(scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player 
            nextPlayer();
        }
    }

});

    function nextPlayer() { 
        // Next player turn
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';

     }

     document.querySelector('.btn-new').addEventListener('click', init);

     function init() {

        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1'
        document.getElementById('name-1').textContent = 'Player 2'

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
     };











// document.querySelector('#current-' + activePlayer).textContent = dice;



/* что бы изменить стиль в CSS мы используем метод STYLE*******
document.querySelector('.dice').style.display = 'none'; 
*****************************************************************
*/


/* изменяет сам html код  не текст***************************************************8
INNERHTML МЕТОД
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; 
******************************************************************************************
*/

















































