//Global Variables


//Functions
function createLayout(){
    let combo = document.getElementById('netCalc').options[netCalc.selectedIndex].getAttribute('layout');
    if (combo == 1){
        netPay.style.display = "none";
        deducted.style.display = "flex";

    }
    else if (combo == 2){
        deducted.style.display = "none";
        netPay.style.display = "flex";

    }
    else{
        deducted.style.display = "none";
        netPay.style.display = "none";
    }
}

//Objects
