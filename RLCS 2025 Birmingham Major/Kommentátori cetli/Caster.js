
var bg = document.getElementById("bg");
var nickName = document.getElementById("nickname");
var teljesNev = document.getElementById("teljesNev");

bg.pause();
bg.currentTime = 0;
nickName.style.opacity = "0.0"; 
teljesNev.style.opacity = "0.0";


setTimeout(function () {
    bg.play();

    nickName.style.clip = "rect(0px,0px,1080px,0px)";
    teljesNev.style.clip = "rect(0px,0px,1080px,0px)";
    nickName.style.opacity = "1.0"; 
    teljesNev.style.opacity = "1.0";

    setTimeout(function () {

        nickName.style.clip = "rect(0px,1920px,1080px,0px)";
        teljesNev.style.clip = "rect(0px,1920px,1080px,0px)";

        setTimeout(function () {
            nickName.style.clip = "rect(0px,0px,1080px,0px)";
            teljesNev.style.clip = "rect(0px,0px,1080px,0px)";
        }, 3750);
    }, 300);
}, 4000);


