let troops = 0;
let tpc = 1;
let tps = 0;
let costcav = 100;
let upgrades = ["arrow","cav","treb","ae","cast"];
let upgradecost = [10, 100, 500, 1000, 5000];
let upgradefunc = [function() {tpc++},function() {tps++}];
let upgradecostincrease = [15,50,500,5000,50000]
let hover = false;
let elIds = ["troops", "archer","tpc"];
function click(){
    troops += tpc;
}
function main(){
    document.getElementById("troops").innerHTML = ("Troops: " +troops);
    document.getElementById("archer").innerHTML = ("Archer<br> +1 troop per click<br> Cost = " + upgradecost[0]);
    document.getElementById("tpc").innerHTML = ("Troops per click: " +tpc);
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
        if(score>=upgradecost[i]){
            score-= upgradecost[i];
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