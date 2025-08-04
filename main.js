let troops = 0;
let tpc = 1;
let cost = 10;
function click(){
    troops += tpc;
}
document.getElementById("milk").addEventListener("click", click);

function buy(){
    if(troops>=cost) {
        troops-=cost;
    tpc++;
    cost+=5;
    } else {
        alert("You cannot afford this :(");
    }
    
}
document.getElementById("buy").addEventListener("click", buy);

function main(){
    document.getElementById("troops").innerHTML = ("Troops: " +troops);
}
setInterval(main, 1);
