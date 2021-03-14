//Global Variables


//Functions
function createLayout(){
    let combo = document.getElementById('netCalc').options[netCalc.selectedIndex].getAttribute('layout');
    if (combo == 1){
        deducted.style.display = "flex";

    }

    console.log(combo);
}

//Objects
