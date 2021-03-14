function calcDeducted(){
    let a = document.getElementById("deductedGross").value;
    let b = document.getElementById("deductedNet").value;
    let c = a-b;
    return c;
}

function deductedCalcJS(){
    document.getElementById("deductedCalc").value = calcDeducted();
}
