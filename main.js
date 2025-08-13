let troops = 0;
let tpc = 1;
let tps = 0;
let upgrades = ["archer","cav","treb","ae","cast"];
let upgradecost = [10, 100, 500, 1000, 5000];
let upgradefunc = [function() {tpc++},function() {tps++}, function() {tpc+=10}, function() {tps+=10}, function() {troops-=troops,tpc-=tpc,tps-=tps}];
let upgradecostincrease = [15,50,500,5000,10000];
let hover = false;
let elIds = ["troops","archer","tpc","cav","tps", "treb", "ae", "cast"];
function click(){
    troops += tpc;
}
function main(){
    document.getElementById("troops").innerHTML = ("Troops: " +troops);
    document.getElementById("archer").innerHTML = ("Archer<br> +1 troop per click<br> Cost = " + upgradecost[0]);
    document.getElementById("tpc").innerHTML = ("Troops per click: " +tpc);
    document.getElementById("cav").innerHTML = ("Cavalry<br> +1 troops per second<br> Cost = " + upgradecost[1]);
    document.getElementById("tps").innerHTML = ("Troops per Second: " + tps);
    document.getElementById("treb").innerHTML = ("Trebuchet<br> +10 troops per click<br> Cost = " + upgradecost[2]);
    document.getElementById("ae").innerHTML = ("Armoured Elephant<br> +10 troops per second<br> Cost = " + upgradecost[3]);
    document.getElementById("cast").innerHTML = ("Castle<br>The final upgrade, you need not anything more.<br> Cost = " + upgradecost[4]);
    for (let i=0; i<elIds.length; i++){
        try{
            if(document.getElementById(elIds[i]).matches(':hover')){
                hover = elIds[i];
            }
        }catch(error){}

    }
}
setInterval(main, 1); 

document.getElementById("milk").addEventListener("click", click);

function buyupgrade(){
    for (let i=0; i<upgrades.length; i++){
       if(upgrades[i] === hover) {
        if(troops>=upgradecost[i]){
            troops-= upgradecost[i];
                upgradefunc[i]();
                upgradecost.splice(i,1,upgradecost[i] + upgradecostincrease[i]);
        }
       }

    }
}

function koopa(){
    troops+=tps;
}

document.getElementById("buy-upgrade").addEventListener("click", buyupgrade);

setInterval(koopa,1000);