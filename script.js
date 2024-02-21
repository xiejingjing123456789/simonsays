var randomPic1;
var randomPic2;
var randomPic3;
var randomPic4;
var randomPic5;
var randomPic6;
var randomPic7;
var randomPic8;
var randomPic9;
var randomPic10;

var mySelection1;
var mySelection2;
var mySelection3;
var mySelection4;
var mySelection5;
var mySelection6;
var mySelection7;
var mySelection8;
var mySelection9;
var mySelection10;

function goToHomeScreen() {
    window.location.href = "home.html"
}

function setUpScreen() {
    document.getElementById("mySelection").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
}

function randomise() {
    setUpScreen();

    randomisePic1();
    randomisePic2();
    randomisePic3();
    randomisePic4();
    randomisePic5();
    randomisePic6();
    // Continue on..

    countDown();
}

function randomisePic1() {
    randomNumber = Math.floor(Math.random() * 10)

    if (randomNumber == 0) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd1.jpg")
        randomPic1 = "YDCP project 2 images/fd1.jpg"
    }
    else if (randomNumber == 1) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        randomPic1 = "YDCP project 2 images/fd2.jpg"
    }
    else if (randomNumber == 2) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        randomPic1 = "YDCP project 2 images/fd3.jpg"
    }
    else if (randomNumber == 3) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        randomPic1 = "YDCP project 2 images/fd4.jpg"
    }
    else if (randomNumber == 4) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        randomPic1 = "YDCP project 2 images/fd5.jpg"
    }
    else if (randomNumber == 5) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        randomPic1 = "YDCP project 2 images/fd6.jpg"
    }
    else if (randomNumber == 6) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        randomPic1 = "YDCP project 2 images/fd7.jpg"
    }
    else if (randomNumber == 7) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        randomPic1 = "YDCP project 2 images/fd8.jpg"
    }
    else if (randomNumber == 8) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd9.jpg")
        randomPic1 = "YDCP project 2 images/fd9.jpg"
    }
    else if (randomNumber == 9) {
        document.getElementById("pic1").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        randomPic1 = "YDCP project 2 images/fd10.jpg"
    }
}

function randomisePic2() {
    randomNumber = Math.floor(Math.random() * 10)


    if (randomNumber == 0) { 
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd1.jpg")
        randomPic2 = "YDCP project 2 images/fd1.jpg"
    }

    else if (randomNumber == 1) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        randomPic2 = "YDCP project 2 images/fd2.jpg"
    }
    else if (randomNumber == 2) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        randomPic2 = "YDCP project 2 images/fd3.jpg"
    }
    else if (randomNumber == 3) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        randomPic2 = "YDCP project 2 images/fd4.jpg"
    }
    else if (randomNumber == 4) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        randomPic2 = "YDCP project 2 images/fd5.jpg"
    }
    else if (randomNumber == 5) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        randomPic1 = "YDCP project 2 images/fd6.jpg"
    }
    else if (randomNumber == 6) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        randomPic2 = "YDCP project 2 images/fd7.jpg"
    }
    else if (randomNumber == 7) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        randomPic2 = "YDCP project 2 images/fd8.jpg"
    }
    else if (randomNumber == 8) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd9.jpg")
        randomPic = "YDCP project 2 images/fd9.jpg"
    }
    else if (randomNumber == 9) {
        document.getElementById("pic2").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        randomPic2 = "YDCP project 2 images/fd10.jpg"
    }

}

function randomisePic3() {
    randomNumber = Math.floor(Math.random() * 10)


    if (randomNumber == 0) { 
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd1.jpg")
        randomPic3 = "YDCP project 2 images/fd1.jpg"
    }

    else if (randomNumber == 1) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        randomPic3 = "YDCP project 2 images/fd2.jpg"
    }
    else if (randomNumber == 2) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        randomPic3 = "YDCP project 2 images/fd3.jpg"
    }
    else if (randomNumber == 3) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        randomPic3 = "YDCP project 2 images/fd4.jpg"
    }
    else if (randomNumber == 4) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        randomPic3 = "YDCP project 2 images/fd5.jpg"
    }
    else if (randomNumber == 5) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        randomPic3 = "YDCP project 2 images/fd6.jpg"
    }
    else if (randomNumber == 6) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        randomPic3 = "YDCP project 2 images/fd7.jpg"
    }
    else if (randomNumber == 7) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        randomPic3 = "YDCP project 2 images/fd8.jpg"
    }
    else if (randomNumber == 8) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd9.jpg")
        randomPic3 = "YDCP project 2 images/fd9.jpg"
    }
    else if (randomNumber == 9) {
        document.getElementById("pic3").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        randomPic3 = "YDCP project 2 images/fd10.jpg"
    }

}
function randomisePic4() {
    randomNumber = Math.floor(Math.random() * 10)


    if (randomNumber == 0) { 
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd1.jpg")
        randomPic4 = "YDCP project 2 images/fd1.jpg"
    }

    else if (randomNumber == 1) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        randomPic4 = "YDCP project 2 images/fd2.jpg"
    }
    else if (randomNumber == 2) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        randomPic4 = "YDCP project 2 images/fd3.jpg"
    }
    else if (randomNumber == 3) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        randomPic4 = "YDCP project 2 images/fd4.jpg"
    }
    else if (randomNumber == 4) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        randomPic4 = "YDCP project 2 images/fd5.jpg"
    }
    else if (randomNumber == 5) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        randomPic4 = "YDCP project 2 images/fd6.jpg"
    }
    else if (randomNumber == 6) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        randomPic4 = "YDCP project 2 images/fd7.jpg"
    }
    else if (randomNumber == 7) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        randomPic4 = "YDCP project 2 images/fd8.jpg"
    }
    else if (randomNumber == 8) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd9.jpg")
        randomPic4 = "YDCP project 2 images/fd9.jpg"
    }
    else if (randomNumber == 9) {
        document.getElementById("pic4").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        randomPic4 = "YDCP project 2 images/fd10.jpg"
    }
}
function randomisePic5() {
    randomNumber = Math.floor(Math.random() * 10)


    if (randomNumber == 0) { 
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd1.jpg")
        randomPic5 = "YDCP project 2 images/fd1.jpg"
    }

    else if (randomNumber == 1) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        randomPic5 = "YDCP project 2 images/fd2.jpg"
    }
    else if (randomNumber == 2) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        randomPic5 = "YDCP project 2 images/fd3.jpg"
    }
    else if (randomNumber == 3) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        randomPic5 = "YDCP project 2 images/fd4.jpg"
    }
    else if (randomNumber == 4) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        randomPic5 = "YDCP project 2 images/fd5.jpg"
    }
    else if (randomNumber == 5) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        randomPic5 = "YDCP project 2 images/fd6.jpg"
    }
    else if (randomNumber == 6) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        randomPic5 = "YDCP project 2 images/fd7.jpg"
    }
    else if (randomNumber == 7) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        randomPic5 = "YDCP project 2 images/fd8.jpg"
    }
    else if (randomNumber == 8) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd9.jpg")
        randomPic5 = "YDCP project 2 images/fd9.jpg"
    }
    else if (randomNumber == 9) {
        document.getElementById("pic5").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        randomPic5 = "YDCP project 2 images/fd10.jpg"
    }
}

function randomisePic6() {
    randomNumber = Math.floor(Math.random() * 10)


    if (randomNumber == 0) { 
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd1.jpg")
        randomPic6 = "YDCP project 2 images/fd1.jpg"
    }

    else if (randomNumber == 1) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        randomPic6 = "YDCP project 2 images/fd2.jpg"
    }
    else if (randomNumber == 2) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        randomPic6 = "YDCP project 2 images/fd3.jpg"
    }
    else if (randomNumber == 3) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        randomPic6 = "YDCP project 2 images/fd4.jpg"
    }
    else if (randomNumber == 4) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        randomPic6 = "YDCP project 2 images/fd5.jpg"
    }
    else if (randomNumber == 5) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        randomPic6 = "YDCP project 2 images/fd6.jpg"
    }
    else if (randomNumber == 6) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        randomPic6 = "YDCP project 2 images/fd7.jpg"
    }
    else if (randomNumber == 7) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        randomPic6 = "YDCP project 2 images/fd8.jpg"
    }
    else if (randomNumber == 8) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd9.jpg")
        randomPic6 = "YDCP project 2 images/fd9.jpg"
    }
    else if (randomNumber == 9) {
        document.getElementById("pic6").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        randomPic6 = "YDCP project 2 images/fd10.jpg"
    }
}



    // Continue on


function countDown() {
    var counter = 10;
    interval = setInterval(function() {   
        document.getElementById("timerText").innerHTML = "Time Left: " + counter;
        counter = counter - 1;
    }, 1000);
    
    setTimeout(function() {
        clearInterval(interval)
        document.getElementById("timerText").style.display = "none";
        document.getElementById("toMemorise").style.display = "none";

        document.getElementById("mySelection").style.display = "block";
        document.getElementById("options").style.display = "block";
        document.getElementById("submitButton").style.display = "block";
    }, 10000);
}

function setOption1(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd1.jpg")
		mySelection1 = "YDCP project 2 images/fd1.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd1.jpg")
		mySelection2 = "YDCP project 2 images/fd1.jpg"
    }
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd1.jpg")
		mySelection3 = "YDCP project 2 images/fd1.jpg"
    }
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd1.jpg")
		mySelection4 = "YDCP project 2 images/fd1.jpg"
    }
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd1.jpg")
		mySelection5 = "YDCP project 2 images/fd1.jpg"
    }
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd1.jpg")
		mySelection6 = "YDCP project 2 images/fd1.jpg"
    }
}

function setOption2(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd2.jpg")
		mySelection1 = "YDCP project 2 images/fd2.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd2.jpg")
		mySelection2 = "YDCP project 2 images/fd2.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        mySelection3 = "YDCP project 2 images/fd2.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        mySelection4 = "YDCP project 2 images/fd2.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        mySelection5 = "YDCP project 2 images/fd2.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd2.jpg")
        mySelection6 = "YDCP project 2 images/fd2.jpg"}
    }
                   
    function setOption3(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd3.jpg")
		mySelection1 = "YDCP project 2 images/fd3.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd3.jpg")
		mySelection2 = "YDCP project 2 images/fd3.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        mySelection3 = "YDCP project 2 images/fd3.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        mySelection4 = "YDCP project 2 images/fd3.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        mySelection5 = "YDCP project 2 images/fd3.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd3.jpg")
        mySelection6 = "YDCP project 2 images/fd3.jpg"}
    }

    function setOption4(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd4.jpg")
		mySelection1 = "YDCP project 2 images/fd4.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd4.jpg")
		mySelection2 = "YDCP project 2 images/fd4.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        mySelection3 = "YDCP project 2 images/fd4.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        mySelection4 = "YDCP project 2 images/fd4.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        mySelection5 = "YDCP project 2 images/fd4.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd4.jpg")
        mySelection6 = "YDCP project 2 images/fd4.jpg"}
    }

    function setOption5(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd5.jpg")
		mySelection1 = "YDCP project 2 images/fd5.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        mySelection2 = "YDCP project 2 images/fd5.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        mySelection3 = "YDCP project 2 images/fd5.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        mySelection4 = "YDCP project 2 images/fd5.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        mySelection5 = "YDCP project 2 images/fd5.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd5.jpg")
        mySelection6 = "YDCP project 2 images/fd5.jpg"}
    }

    function setOption6(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd6.jpg")
		mySelection1 = "YDCP project 2 images/fd6.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        mySelection2 = "YDCP project 2 images/fd6.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        mySelection3 = "YDCP project 2 images/fd6.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        mySelection4 = "YDCP project 2 images/fd6.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        mySelection5 = "YDCP project 2 images/fd6.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd6.jpg")
        mySelection6 = "YDCP project 2 images/fd6.jpg"}
    }

    function setOption7(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd7.jpg")
		mySelection1 = "YDCP project 2 images/fd7.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        mySelection2 = "YDCP project 2 images/fd7.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        mySelection3 = "YDCP project 2 images/fd7.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        mySelection4 = "YDCP project 2 images/fd7.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        mySelection5 = "YDCP project 2 images/fd7.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd7.jpg")
        mySelection6 = "YDCP project 2 images/fd7.jpg"}
    }

    function setOption8(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd8.jpg")
		mySelection1 = "YDCP project 2 images/fd8.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd8.jpg")
		mySelection2 = "YDCP project 2 images/fd8.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        mySelection3 = "YDCP project 2 images/fd8.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        mySelection4 = "YDCP project 2 images/fd8.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        mySelection5 = "YDCP project 2 images/fd8.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd8.jpg")
        mySelection6 = "YDCP project 2 images/fd8.jpg"}
    }

    function setOption9(){
        if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
            document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd9.jpg")
            mySelection1 = "YDCP project 2 images/fd9.jpg"
        }
        else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
            document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd9.jpg")
            mySelection2 = "YDCP project 2 images/fd9.jpg"}
        else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png"){
            document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd9.jpg")
            mySelection3 = "YDCP project 2 images/fd9.jpg"}
        else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
            document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd9.jpg")
            mySelection4 = "YDCP project 2 images/fd9.jpg"}
        else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
            document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd9.jpg")
            mySelection5 = "YDCP project 2 images/fd9.jpg"}
        else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
            document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd9.jpg")
            mySelection6 = "YDCP project 2 images/fd9.jpg"}
        }

    function setOption10(){
    if (document.getElementById("selection1").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection1").setAttribute("src", "YDCP project 2 images/fd10.jpg")
		mySelection1 = "YDCP project 2 images/fd10.jpg"
    }
    else if (document.getElementById("selection2").getAttribute("src") == "YDCP project 2 images/blank.png") {
        document.getElementById("selection2").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        mySelection2 = "YDCP project 2 images/fd10.jpg"}
    else if (document.getElementById("selection3").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection3").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        mySelection3 = "YDCP project 2 images/fd10.jpg"}
    else if (document.getElementById("selection4").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection4").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        mySelection4 = "YDCP project 2 images/fd10.jpg"}
    else if (document.getElementById("selection5").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection5").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        mySelection5 = "YDCP project 2 images/fd10.jpg"}
    else if (document.getElementById("selection6").getAttribute("src") == "YDCP project 2 images/blank.png"){
        document.getElementById("selection6").setAttribute("src", "YDCP project 2 images/fd10.jpg")
        mySelection6 = "YDCP project 2 images/fd10.jpg"}
    
    
} //continue

function checkAnswer() {
    if (randomPic1 == mySelection1 && randomPic2 == mySelection2 && randomPic3 == mySelection3 && randomPic4 == mySelection4 && randomPic5 == mySelection5 && randomPic6 == mySelection6) {
        alert("You win!")
    }
    else {
        alert ("You lose!")
    }
}