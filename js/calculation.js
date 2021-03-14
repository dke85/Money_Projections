function calcDeducted(){
    let a = document.getElementById("deductedGross").value;
    let b = document.getElementById("deductedNet").value;
    let c = a-b;
    return c;
}

function calcNetPay(){
    let a = document.getElementById("netPayGross").value;
    let b = document.getElementById("netPayDeducted").value;
    let c = a-b;
    return c;
}

function deductedCalcJS(){
    document.getElementById("deductedCalc").value = calcDeducted();
}


function netPayCalcJS(){
    document.getElementById("netPayCalc").value = calcNetPay();
}
