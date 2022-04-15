const time = setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    if (hr >= 12) {
        hr = hr - 12;
        session = "PM";
    }
    document.getElementById("session").innerHTML = session;

});



