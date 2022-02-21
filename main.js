/*var firstName ="oseiwe";
console.log('my name is '+' '+firstName);

var job, family ,car;
job="teacher";
family="true";
car="yes";

console.log(firstName+' '+'has a car '+'her job is '+job+'those she has a car'+car+'and a family'+family);
alert ('my name is'+'  '+ firstName);
var lastName = prompt('what is your name?');
console.log(lastName);*/


/*var  marriedStatus = 'married';l
var johnAge = 18;
var mikeAge = 20;
var averageAge =johnAge + mikeAge /2 ;
console.log(averageAge);
var firstName ='oseiwe'
var marriedStatus ='single'

if (marriedStatus === 'married') {
    console.log(firstName +'is married!');
}else{
    console.log(firstName = 'marry soon');
}

var johnWeight = 50.5;
var markWeight = 60.5;

var johnMass = 1.5;
var markMass = 2.5;
var divideTwo = 4;


var dayJohn = (johnWeight/divideTwo*johnMass)+50
var dayMark = (markWeight/divideTwo*markMass)+50

console.log(dayJohn);

if (dayJohn > dayMark) {
    console.log('john is a man');
}else {
    console.log('mark is man');
}

var isMarried = 'true';
if (isarried === 'false') {
    console.log('he will marry soon yes');
}else{
    console.log('he has children yes');
}
var age = 20;
var he = 'paul';


if (age < 13) {
    console.log(he + ' drinks juice');
}else if(age >= 13 && age < 20){
    console.log( he + 'drinks beer and energy drinks');
}else if (age >= 20 && age < 30){
    console.log(he + 'drinks many many drinks for real for real');
}else{
    console.log(he + 'drinks coke fanta sprite and monster');
}

var age = 20;
var he = 'paul';

age > 20? console.log(he  + 'is a man of god is church')
:console.log(he + 'is a boy of good things');

var drink = age >= 20 ?'he is a boy':'he is a man'
console.log(drink);
if (averageJohn > 250) {
    console.log('john is the winner with ' + winner);
}else{
    console.log('mike is the winner with' + winner);
}

var johnFirst = 89;
var johnSecond = 120;
var johnThird = 103;

var mikeFirst = 116;
var mikeSecond = 94;
var mikeThird = 123;

var maryFirst = 97;
var marySecond = 134;
var maryThird = 105;

var averageMary = maryFirst+marySecond+maryThird/3;
console.log(averageMary);

var averageJohn = johnFirst+johnSecond+johnThird/3;
var averageMike = mikeFirst+mikeSecond+mikeThird/3;
console.log(averageJohn);
console.log(averageMike);

var winner = 260;





if (winner < 260 ) {
    console.log('john is the winner with ' + averageJohn);
}else if (winner >= 260 && winner < 270){
    console.log('mary is the winner with ' + averageMary);
}else {
    console.log('mike is the winner with ' + averageMike);
}

function retiretionAge (year, firstName, dateEmployed){
    var age = currentAge(year) ;
    var retire = 65-age;
    if (2005 < 1940) {
        console.log(firstName +'is a in '+ dateEmployed +'at'+ retire );
    }else if (2005 > 1967){
        console.log(firstName + 'was never employed is '+ retire);
    }else if (2005 > 1957){
        console.log(firstName + 'is retired');
    }
   
}

function currentAge (birthYear) {
    return 2018 - birthYear;
}

var johnAge = currentAge(1987);
var mikeAge = currentAge(1900);
var markAge = currentAge(1983);
var peterAge = currentAge(1950);

console.log(johnAge, mikeAge, markAge, peterAge );


function retirementYear(firstName, year,birthYear) {
    var age = currentAge(year);
    var retirement = 65 - age;
    
    if ( retirement > 0) {
        console.log(firstName  +' '+ 'is in office for'  + ' ' + retirement + ' '+'years' );
    }else{
        console.log(firstName  +'is retired' + ' '+ retirement );  
    }
       console.log(firstName + 'is born in' + birthYear); 
    }

}

retirementYear('john', 1987,1987);
retirementYear('mike', 1900 , 1900);
retirementYear('mark', 1983, 1900);
retirementYear('peter', 1950, 1950);


var peopleJob= function(job, year) {
    switch (job) {
        case 'teacher':
            return  'teacher teaches how to code'+ year ;
        
            case 'designer':
                return   'designer designs good web pages' + year;
            
        default:
            return 'does somethin else' + year;
            
    }
}

console.log(peopleJob('teacher', 1999));
console.log(peopleJob('designer', 2000));
console.log(peopleJob('fisher', 2020));

var job = '';
switch (job) {
    case 'teacher':
        console.log(job + ' ' + 'teaches how to  code html boo ');
        break;
        case 'fisher':
            console.log(job + ' ' + 'fishes fish in google chrome ');
            break;
    default:
        console.log(job + ' ' + 'something else please ');
        break;
}

var names =['james', 'john', 'paul', 'mark'];
var age =[14,15,17,12 ];

console.log(names,age);
console.log(names.length);
names[names.length]='mary'
console.log(names);
names[names.length]='johnny'
console.log(names);

names[names.pop]
console.log(names);

var john = ['shoes', 'bags', 'school', 'books ', 'designer','job']

john.pop();
console.log(john);
john[john.length]='house';
console.log(john);
john[1]='gold'
console.log(john);

john.push('silver');
console.log(john);
john.shift();
console.log(john);

john.unshift('mr',13)
console.log(john);

console.log(john.indexOf('books'));
console.log(john.indexOf('school'));
var isDesigner = john.indexOf('job ') === -1?'john is not a job ' :'john is a job ';

console.log(isDesigner);

var markBmi =70/(60*2);
var johnBmi = 50/(30*2);

if (mark.bmi>john.bmi) {
    console.log('mark' + ' ' + 'is the winner with the highest bmi '+ markBmi);   
}else if (john.bmi>mark.bmi){
    console.log('john' + ' ' + 'is the winner with the highest bmi '+ johnBmi);   
}else{
    console.log('its a draw');
}

var prosper = {
  firstName:'john',
  lastNmae:'prince',
  family:['john','james','king','pop','angular','shine'],
  brthYear:1989,
  job:'teacher',

  calcAge:function (age) {
      return 2018-age;
      
  }
};
console.log(prosper.calcAge(1989));

var john =['paul','king','prince'];
console.log(john.length);
john[john.length]='mary';
console.log(john);

var kings ={
    firstName:'john',
    lastNmae:'prince',
    family:['john','james','king','pop','angular','shine'],
    brthYear:1989,
    job:'teacher',
    placeLived:'lagos',
    number:234,
    children:21,
    married:true,

    calcNumber:function (number) {
        return 21*(number);
    }
}
console.log(kings.calcNumber(234));
console.log(kings.calcNumber(67));

kings.job = 'designer';
console.log(kings);
kings.family= kings[kings.length]='paul';
console.log(kings);
kings['married']=false;
console.log(kings);

var john ={
    fullName:'johnPaul',
    mass:50,
    heigth:30,
    calcBMI:function(){
        this.bmi= this.mass/(this.heigth*this.heigth);
        return this.bmi;
    }
    
}



var mark ={
    fullName:'markPaul',
    mass:70,
    heigth:60,
    calcBMI:function(){
        this.bmi= this.mass/(this.heigth*this.heigth);
        return this.bmi;
    }

}

john.calcBMI();
mark.calcBMI();
console.log(john,mark);


if (john.bmi>mark.bmi) {
    console.log(john.fullName + ' '+ 'is the winner with' + ' '+ john.bmi);   
}else if(mark.bmi > john.bmi){
    console.log(mark.fullName + ' '+ 'is the winner with' + ' '+ mark.bmi);   
}else{
    console.log('it is a draw');
}

for ( var i = 1; i <= 20; i++) {
    console.log(i);
    
}

var john = ['blue','red','green','orange','golden','soapred','royablue']
for (var i =0; i <= john.length; i++){
    console.log(john[i]);
}
 

var john =['books','cars','phones','cards', true ,'touches',1995, 25,1.5]
for (var i = 0; i < john.length; i++) {  
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]); 
}

var john =['books','cars', 23,'phones','cards', true ,'touches',1995, 25,1.5]
for (var i = 0; i < john.length; i++) {  
    if (typeof john[i] !== 'string') break;
    console.log(john[i]); 
}

for (var i = john.length-1; i >= 0; i--){
    console.log(john[i]);
}

var mark ={
    fullName:'markPaul',
    mass:70,
    heigth:60,
    calcBMI:function(){
        this.bmi= this.mass/(this.heigth*this.heigth);
        return this.bmi;
    }

}


var john ={
    fullName :'johnJames',
    bill :[124, 48, 268, 180, 42],
    calcTips:function() {
        this.tips =[];
        this.finalResults =[];
        for (var i = 0; i < this.bill.length; i++){
            var percentage;
             var bills =this.bill[i];
            if (bills < 50) {
                percentage = .2; 
            }else if (bills > 50 && bills < 200){
                percentage = .15;
            }else{
                percentage =.1;
            }

            this.tips[i]= bills*percentage;
            this.finalResults[i] = bills+ bills*percentage;
        }
         
    }
   
}
john.calcTips();
console.log(john);


var mark = {
    fullName: 'mark John',
    bill: [77, 375, 110,45],
    calcTips:function (){
        this.tips =[];
        this.finalResults =[];
        for (var i = 0; i < this.bill.length; i++){
            var percentage;
             var bills =this.bill[i];
            if (bills < 100) {
                percentage = .2; 
            }else if (bills > 100 && bills < 300){
                percentage = .1;
            }else{
                percentage =.25;
            }

            this.tips[i]= bills*percentage;
            this.finalResults[i] = bills+ bills*percentage;
        }
         
    }
   /document.querySelector('#current-'+ activePlayer).innerHTML = '<em>'+ dice +'</em>';

////console.log(dice);
//document.querySelector('#current-'+ activePlayer).textContent =dice;
}
john.calcTips();
mark.calcTips();
console.log(john,mark);
*/

 
 

///NEW PROECT

var scores, roundScore ,activePlayer ;

scores =[ 0, 0];
roundScore =0;
activePlayer = 0;



document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';

document.querySelector('.roll').addEventListener('click',function() {
    //random number
    var dice;
    dice = Math.floor(Math.random()*6) + 1;
    //display result here
    var diceDOM =document.querySelector('.dice');
    diceDOM.style.display = 'block';  
    diceDOM.src='dice-'+ dice +'.png';
    //update the round score if the rolled number was NOT a 1
    if (dice !== 1) {
        roundScore = roundScore + dice;
        document.getElementById('current-'+ activePlayer).textContent =roundScore;

    }else {
        nextPlayer (); 
    }

});

document.querySelector('.hold').addEventListener('click', function() {
    //add current score to global score
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //update the ui
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('#name-' + activePlayer ).classList.add('winner');
        document.querySelector('.circle-0').classList.remove('active');
        document.querySelector('.circle-1').classList.remove('active');

    }else{
        //next player
        nextPlayer (); 
    }
    
    //check if the player won
   
    
})



function nextPlayer() {
    activePlayer === 0 ?activePlayer = 1 :activePlayer = 0;
        roundScore =0;
        document.getElementById('current-0').textContent ='0';
        document.getElementById('current-1').textContent ='0';
        
        //document.querySelector('.player-0').classList.remove('active');
        //document.querySelector('.player-1').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.circle-0').classList.toggle('active');
        document.querySelector('.circle-1').classList.toggle('active');

        //document.querySelector('.circle-0').classList.remove('active');
        //document.querySelector('.circle-1').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click',function() {
    scores =[ 0, 0];
    roundScore =0;
    activePlayer = 0;


    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent ='0';
    document.getElementById('score-1').textContent ='0';
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';
})