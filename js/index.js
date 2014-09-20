var yscore = 0;
var cscore = 0;
document.getElementById("rock").style.visibility="hidden";
document.getElementById("result").innerHTML="Result";




function btnRock() {
    
    document.getElementById("rock").style.visibility="hidden";
    
    var num1 = Math.floor((Math.random()*3)+1);
    if (num1==1) {
        document.getElementById("rock").src="img/rock1.png";
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("result").innerHTML="Tie"
    }else if (num1 == 2) {
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("rock").src="img/paper1.png";
        document.getElementById("result").innerHTML="I win!";
        cscore=cscore+1;
        document.getElementById("comp").innerHTML=cscore;
    }else{
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("rock").src="img/scissors1.png";
        document.getElementById("result").innerHTML="You win";
        yscore=yscore+1;
        document.getElementById("you").innerHTML=yscore;
    }
}

function btnPaper() {
    
    
    var num2 = Math.floor((Math.random()*3)+1);
    if (num2 == 1) {
        document.getElementById("rock").src="img/rock1.png";
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("result").innerHTML="You win!";
        yscore=yscore+1;
        document.getElementById("you").innerHTML=yscore;
    }else if (num2 == 2) {
        document.getElementById("rock").src="img/paper1.png";
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("result").innerHTML="Tie!";
        
        
    }else {
        document.getElementById("rock").src="img/scissors1.png";
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("result").innerHTML="I win!";
        cscore=cscore+1;
        document.getElementById("comp").innerHTML=cscore;
    }
}

function btnScissors() {
    var num3 = Math.floor((Math.random()*3)+1);
    if (num3 == 1) {
        document.getElementById("rock").src="img/rock1.png";
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("result").innerHTML="I win";
        cscore=cscore+1;
        document.getElementById("comp").innerHTML=cscore;   
    }else if (num3 ==2) {
        document.getElementById("rock").src="img/paper1.png";
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("result").innerHTML="You win!";
        yscore=yscore+1;
        document.getElementById("you").innerHTML=yscore;
        
    }else{
        document.getElementById("rock").src="img/scissors1.png";
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("result").innerHTML="Tie!";
    }
}
function btnReset() {
    yscore=0;
    document.getElementById("you").innerHTML=yscore;
    cscore=0;
    document.getElementById("comp").innerHTML=cscore;
    document.getElementById("rock").style.visibility="hidden";
    document.getElementById("result").innerHTML="Result";
}


