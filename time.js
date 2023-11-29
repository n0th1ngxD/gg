let second2 = 0;
function updateTime() {
    var d = new Date();
    var second = d.getSeconds();
    if(second < 10) {
        second2 = "0" + second;
    } else {
        second2 = second;
    }

    let dn = "";
    if(d.getHours < 18) {
        dn = "☀"
    } else {
        dn = "🌑"
    }
    
    document.querySelector("#time").textContent = (d.getHours() + ":" + d.getMinutes() + ":" + second2) + " " + dn;
}

setInterval(updateTime, 1000);