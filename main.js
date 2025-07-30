let troops = 0;
function click(){
    troops++;
}
document.getElementById("sword").addEventListener("click", click);
function main(){
    document.getElementById("troops").innerHTML = ("Troops: " +troops);
}
setInterval(main, 1);