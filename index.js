 
document.getElementById("time_date").addEventListener("click" , askAnswer);
document.getElementById("leapyear").addEventListener("click" , fourAskAnswer);
document.getElementById("daysleft").addEventListener("click" , fiveAskAnswer);
document.getElementById("guessinggame").addEventListener("click" , twoAskAnswer);
document.getElementById("trianglearea").addEventListener("click" , trareadata );
document.getElementById("circlearea").addEventListener("click" , crareadata );
document.getElementById("mathtrick").addEventListener("click" , ggmathtrick );
var show = document.getElementById("display");


var today = new Date();





function askAnswer () {

    // var today = new Date();
    var todayDate = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " Current time is: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    // function hide (show) {
    //     if (show.style.display = 'block') {
    //         show.innerHTML = ""
    //         return
    //     }

    // }

    show.innerHTML = "Humankind's current date is: " + todayDate;
    
    
    
}

function twoAskAnswer () {    
    let x = Math.floor((Math.random() * 10) + 1);
    var y = prompt("Guess number between 1-10.");
    
    if (x == y) {
        show.innerHTML = "You guessed it right, amazing!  :)"
    }    
    else {
        show.innerHTML = "Close but it was " + x
    }
}



function fourAskAnswer () {
    var year = prompt("Year? : ")
    if (year % 4 == 0 ) {
        show.innerHTML = "Yes"
    }
    else {
        show.innerHTML = "No";
    }
}

function fiveAskAnswer () {
        var local_date = today.getDate;
        var local_month = today.getMonth;
        var christmas_date = 25
        var christmas_month = 12

    let answer_date = christmas_date - parseInt(local_date) ;
    let answer_month = christmas_month - parseInt(local_month);
    var answer = "There are left " + answer_month + " months and " + answer_date + " days!";
    
    show.innerHTML = answer;
    
}
function trareadata() {
    function Triangle(height, width) {
        this.height = height;
        this.width = width;
    }

    Triangle.prototype.getAreaT = function getAreaT() {
        return this.height * this.width / 2;
    };

    h = prompt("Input Height: ");
    w = prompt("Input Width: ");
    var MyTriangle = new Triangle(h,w);
    show.innerHTML = "The area of your triangle is: " + MyTriangle.getAreaT();
}

function crareadata() {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getAreaC = function getAreaC() {
        return Math.round(Math.PI * Math.pow(this.radius, 2))
    };

    r = prompt("Radius of Circle: ");
    var MyCircle = new Circle(r);
    show.innerHTML = "Your circle's area is: " + MyCircle.getAreaC();
}

function ggmathtrick() {
    function Mathtrick(mathnumber) {
        this.mathnumber = mathnumber;
    } 
    Mathtrick.prototype.mathtrickfunc = function mathtrickfunc() {
        let result =  Math.floor(this.mathnumber / 10) - 4;
    };

    show.innerHTML = "Imagine any whole number, first add 2, secondly multiply it by 2, then add 5 and finally, multiply by 5."

    document.getElementById("nextmn").addEventListener("click" , showguess );
    function showguess() {
        var usernum = prompt("Tell me the result yoau have after the calculations: ") 
        var MyTrick = new ggmathtrick(usernum);
        show.innerHTML = "I know that your initial number was: " + MyTrick.mathtrickfunc();
    }

}