function bubblemaking (){
    var clutter=""

    for(i=1;i<=189;i++){
        var num=Math.round(Math.random()*9)
        clutter+=`<div class="bubble">${num}</div>`
        
    }
    document.querySelector(".lower").innerHTML=clutter
}
bubblemaking()

function timer(){
    var timer=60
    var timercontent = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer
        }
        else{
            clearInterval(timercontent)
            document.querySelector(".lower").innerHTML=`<h1>Game Over You scored: ${scoreval}</h1>`

        }
    },1000)
}

timer()


var randomnum
function hitting(){
    randomnum= Math.round(Math.random()*9)
    document.querySelector("#hit").textContent=randomnum
}
hitting()

var scoreval= 0
function score(){
   scoreval += 10
   document.querySelector("#score").textContent=scoreval
}

function tapping(){
    document.querySelector(".lower").addEventListener("click",function(dets){
        var clickednum=Number(dets.target.textContent)
        if(clickednum===randomnum){
            score()
            bubblemaking()
            hitting()
        }
    })

}

tapping()