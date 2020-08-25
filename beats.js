const beats = _ => {
    let data = new Date()
    let hora = data.getUTCHours()
    let minuto = data.getUTCMinutes()
    let beats = (((minuto+1) * 60)+((hora+1)*3600))/86.4;
    document.getElementById("beats").innerHTML = Math.round((beats + Number.EPSILON) * 100) / 100;
    //document.getElementById("beats").innerHTML = Math.round(beats*100)/100;
}

let interval = window.setInterval(beats);