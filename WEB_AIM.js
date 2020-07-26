var time_second = 0;
var time_minute = 0;


function gameStart(){
    for (var i = 0; i<50 ; i++){
        var img = document.createElement("img");
        var rnd_Z = Math.round(Math.random() * 1000);
        var rnd_X = Math.round(Math.random() * 1900);
        img.onclick = function(){document.getElementById("inTarget").removeChild(this)};
        img.src = "A-1.png";
        img.style.cursor = "pointer";
        img.style.height="30px";
        img.style.top= rnd_Z+"px";
        img.style.left = rnd_X+"px";
        img.style.position = "absolute"
        document.getElementById("inTarget").appendChild(img);
    }
    console.log(document.getElementById("inTarget").getElementsByTagName("img").length);
    clear_time();
    //clearInterval - 일정시간마다 반복하는 것을 중단

}
function clear_time (){
     setInterval(time_set,1000);
}
function time_set(){
    time_second = time_second % 60 + 1;

    if (document.getElementById("inTarget").getElementsByTagName("img").length == 0)
    {
        return clearInterval(clear_time);   
    }
    

    if (time_second < 10 )
    {
       return  document.querySelector("#Time").value = String(time_minute) + " : 0"+ String(time_second);
    } else {
       return document.querySelector("#Time").value = String(time_minute) + " : "+ String(time_second);
    }
    

}