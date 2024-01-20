var timer=60;
var hitnumber;
var score=0;

function increaseScore(){
    score=score+10;
    document.querySelector("#scorevalue").textContent=score;
}

function getnewHit(){
    hitnumber = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitnumber;
}

function makebubble(){
    var clutter="";

for(i=0;i<=132;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML=clutter;
}



function runtimer(){
    var stopTimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent=timer;
        }else{
            clearInterval(stopTimer);
            document.querySelector("#pbottom").innerHTML=`<h1>GAME OVER!</h1>`;
        }
    },1000)
}

document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickednumber = (Number(details.target.textContent));
    if(clickednumber === hitnumber){
        increaseScore();
        makebubble();
        getnewHit();
    }
})

getnewHit();
runtimer();
makebubble();
