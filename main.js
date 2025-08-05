let troops = 0;
let tpc = 1;
let cost = 10;
let dtpc = 1;
function click(){
    troops += tpc;
}
document.getElementById("milk").addEventListener("click", click);

function buy(){
    if(troops>=cost) {
        troops-=cost;
        tpc++;
        cost+=15;
        dtpc++;
    } else {
        alert("You cannot afford this :(");
    }
    
}
document.getElementById("buy").addEventListener("click", buy);

function main(){
    document.getElementById("troops").innerHTML = ("Troops: " +troops);
    document.getElementById("buy").innerHTML = ("Archer<br> +1 troop per click<br> Cost = " +cost);
    document.getElementById("dtpc").innerHTML = ("Troops per click: " +dtpc);
}
setInterval(main, 1);
