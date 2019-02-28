
var i=0;

function timeCount() {
    i++;
    postMessage(i);

    setTimeout("timeCount()",500);//每隔500MS 进行一次

}

timedCount();