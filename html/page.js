let clicks = 1;
let counter = 0;
let price = 250;
let price2 = 10;
let ClicksPerSecond = 0;
let price3 = 2500;
let price4 = 25000
let price5 = 100000
let price6 = 10000000
let intervel = setInterval(persec, 1000);
const counterElement = document.getElementById('counter');
const clickerBtn = document.getElementById('clickerBtn');
const Bclicker = document.getElementById('BigClicker');
const aclicker = document.getElementById('autoclicker');
const Cursora = document.getElementById('Cursor');
const Gclicker = document.getElementById('GodClicker');
const Gcursor = document.getElementById('Goldcursor');
const fclicker = document.getElementById('Clickerfactory');
const popup =  document.getElementById('snackbar')

function incrementCounter() {
counter=counter+clicks;
counterElement.textContent = counter;
}
function BigClicker(){
    if (counter>=price) {
        counter=counter-price;
        counterElement.textContent = counter;
        clicks=clicks*2;
        price=price*3;
        Bclicker.innerHTML="Big Clicker  2x clicks    Price:"+price;

        }
        else{
            popup.className = "show";
            setTimeout(function(){ popup.className = popup.className.replace("show","");},3000);
        }
    }

function Cursor(){
    if (counter>=price2)
    {counter=counter-price2;
        counterElement.textContent = counter;
        ClicksPerSecond=ClicksPerSecond+1;
        price2=price2*3;
        Cursora.innerHTML="Cursor   +1/sec   Price:"+price2;
    }
    else{
        popup.className = "show";
        setTimeout(function(){ popup.className = popup.className.replace("show","");},3000);
    }
}
function persec() {
    counter = counter + ClicksPerSecond;
    counterElement.textContent = counter;
}


function expandshop() {
    if (document.getElementById("shop1").classList.contains("active")) {
        document.getElementById("shop1").className = "inactive";
    }
    else {
        document.getElementById("shop1").className = "active";
        }

}

function autoclicker(){
    if (counter>=price3)
    {counter=counter-price3;
        counterElement.textContent = counter;
        ClicksPerSecond=ClicksPerSecond+100;
        price3=price3*5;
        aclicker.innerHTML=" Auto Clicker  +100/sec   Price:"+price3;
}
else{
    popup.className = "show";
    setTimeout(function(){ popup.className = popup.className.replace("show","");},3000);
}
}

function godclicker(){
    if (counter>=price4)
    {counter=counter-price4;
        counterElement.textContent = counter;
        ClicksPerSecond=ClicksPerSecond+1000;
        price4=price4*5;
        Gclicker.innerHTML=" God Clicker  +1000/sec   Price:"+price4;
}
else{
    popup.className = "show";
    setTimeout(function(){ popup.className = popup.className.replace("show","");},3000);
}
}

function goldcursor(){
    if (counter>=price5) {
        counter=counter-price5;
        counterElement.textContent = counter;
        clicks=clicks*10;
        price5=price5*7;
        Gcursor.innerHTML="Gold Cursor  x10 clicks  Price:"+price5;

        }
    else{
        popup.className = "show";
        setTimeout(function(){ popup.className = popup.className.replace("show","");},3000);
    }
}

function clickerfactory(){
    if (counter>=price6)
    {counter=counter-price6;
        counterElement.textContent = counter;
        ClicksPerSecond=ClicksPerSecond+100;
        price6=price6*9;
        fclicker.innerHTML="Clicker Factory  +100000/sec  Price:"+price6;
    }

else{
    popup.className = "show";
    setTimeout(function(){ popup.className = popup.className.replace("show","");},3000);
}
}