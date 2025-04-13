var nickName = document.getElementById("nickname");
var teljesNev = document.getElementById("teljesNev");
var background = document.getElementById("background");

nickName.style.top = ((300 + 1080) + "px");
teljesNev.style.top = ((550 + 1080) + "px");
background.style.top = "1080px";

nickName.style.clip = "rect(0px,1556px,270px,364px)";
teljesNev.style.clip = "rect(0px,1556px,270px,364px)";
background.style.clip = "rect(0px,1556px,270px,364px)";

setTimeout(function () {
    nickName.style.top = ((300) + "px");
    teljesNev.style.top = ((550) + "px");
    background.style.top = "0px";

    nickName.style.clip = "rect(0px,1556px,800px,364px)";
    teljesNev.style.clip = "rect(0px,1556px,800px,364px)";
    background.style.clip = "rect(0px,1556px,800px,364px)";

    setTimeout(function () {

        nickName.style.top = ((300 + 1180) + "px");
        teljesNev.style.top = ((550 + 1180) + "px");
        background.style.top = "1080px";
    }, 7000);
}, 1500);