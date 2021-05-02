    var mins = 30;
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
    setTimeout(Start,1000); 

    function Start() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("count").innerHTML = currentMinutes + ":" + currentSeconds;
        if(secs !== -1) setTimeout('Start()',1000);
    }
