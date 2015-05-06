// set all ther numbers in an array
var display = document.getElementById('display');
var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator');
var clear = document.getElementById('clear');
var firstNumber = '';
var secondNumber = '';
var calculator = '';


for (var i=0; i<number.length; i++) {

  number[i].addEventListener('click', function(e){
    storeNumber(this.value);
  });
}

for (var i=0; i<operator.length; i++) {

  operator[i].addEventListener('click', function(e){
    console.log(this.value);
    display.value = this.value;
    console.log(display.value);

  });
}






var storeNumber = function(number) {
  display.value = number;
  if (firstNumber !== '') {
  
  secondNumber = number;
}else{

  firstNumber=number;

};
  console.log("The first number is " + firstNumber);
  console.log("The second number is " + secondNumber);
};












for (var i=0; i<clear.length; i++) {

    clear[i].addEventListener('click', function(e){
    console.log(this.value);
    display.value = this.value;
    console.log(display.value);

  });
}

// var click = document.getElementById('display');

// click.addEventListener('click', function(e) {
// // to target the writing within...

//   alert(e.target.innerHTML);

// });



      // display.addEventListener("submit", function(e) {
       // return this.value;
        // e.preventDefault();

        
  //     });



// // set the operators up as an array
// var operator = ['x','-','/','*'];

// // call up all the keys by their name and function

// var number = document.getElementsByClassName('number');

//   number.addEventListener('click', function(e) {

// });



firstNumber();
console.log(firstNumber);