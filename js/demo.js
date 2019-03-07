
var i=0;

function timeCount() {
    i++;
    postMessage(i);

    setTimeout("timeCount()",500);//每隔500MS 进行一次



}

timedCount();


//隐藏淘宝webview标签
document.getElementsByClassName("rmsp rmsp-bl rmsp-bl")[0].style.display="none";
