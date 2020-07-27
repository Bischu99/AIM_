var time_time = 0;
var gameStartCheck;

function gameStart(){
    
    if (gameStartCheck){
        return alert("실행 중 입니다.");
    }
    for (var i = 0; i<10 ; i++){
        var img = document.createElement("img");
        var rnd_Z = Math.round(Math.random() * 95);
        var rnd_X = Math.round(Math.random() * 95);
        img.onclick = function(){document.getElementById("inTarget").removeChild(this)};
        img.src = "A-1.png";
        img.style.cursor = "pointer";
        img.style.height="30px";
        img.style.top= rnd_Z+"%";
        img.style.left = rnd_X+"%";
        img.style.position = "absolute"
        document.getElementById("inTarget").appendChild(img);
    }
    console.log(document.getElementById("inTarget").getElementsByTagName("img").length);
    gameStartCheck = true;
    startInterval();
}
function reSet(){
    clearInterval(time_set);
    document.querySelector("#Time").value = "00 : 00 : 00";
    document.querySelector("#inTarget").innerHTML ="";
    time_time = hours = minute = second = 0;
    gameStartCheck = false; 

}
function startInterval(){
    time_set = setInterval(function(){
        time_time += 1;
        var hours = parseInt(time_time/3600);
        var minute = parseInt(time_time%3600/60);
        var second = time_time%3600%60;

        hours <= 9 ? hours ='0'+hours : hours; 
        minute <= 9 ? minute ='0'+minute : minute;
        second <= 9 ? second ='0'+second : second;
        document.querySelector("#Time").value = hours+" : "+minute+" : "+second;

        if (document.getElementById("inTarget").getElementsByTagName("img").length == 0 )
        {
            clearInterval(time_set);
            time_time = hours = minute = second = 0;
            gameStartCheck = false; 
            return clearInterval(time_set);
        }


    },1000);
}