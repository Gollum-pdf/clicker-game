let troops = 0;
let tpc = 1;
let tps = 0;
let na = 0;
let nc = 0;
let nt = 0;
let ne = 0;
let nk = 0;
let upgrades = ["archer","cav","treb","ae","cast"];
let upgradecost = [10, 100, 500, 1000, 5000];
let upgradefunc = [function() {tpc++, na++},function() {tps++, nc++}, function() {tpc+=10, nt++ }, function() {tps+=10, ne++}, function() {tpc+=15, tps+=15, nk++}];
let upgradecostincrease = [15,50,500,1500,2500];
let hover = false;
let elIds = ["troops","archer","tpc","cav","tps", "treb", "ae", "cast", "na", "nc", "nt", "ne", "nk"];
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
    document.getElementById("cast").innerHTML = ("Castle<br>+15 troops per click<br> +15 troops per second<br> Cost = " + upgradecost[4]);
    document.getElementById("na").innerHTML = ("Amount of Archers: " +na);
    document.getElementById("nc").innerHTML = ("Amount of Cavalry: " +nc);
    document.getElementById("nt").innerHTML = ("Amount of Trebuchets: " +nt);
    document.getElementById("ne").innerHTML = ("Amount of Armoured Elephants: " +ne);
    document.getElementById("nk").innerHTML = ("Amount of Castles: " +nk);
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