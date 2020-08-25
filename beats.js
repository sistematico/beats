const beats = _ => {
    //((UTC+1minutes * 60) + (UTC+1hours * 3600)) / 86.4
    let d = new Date()
    let h = d.getUTCHours()
    let m = d.getUTCMinutes()
    let s = d.getUTCSeconds()
    let beats = ((s + (m * 60) + (h * 3600))) / 86.4;
    document.getElementById("beats").innerHTML = beats;
}

let interval = window.setInterval(beats);