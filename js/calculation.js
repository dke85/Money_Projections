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

function calcGrossPay(){
    let a = document.getElementById("hourlyRate").value;
    let b = document.getElementById("hoursWorked").value;
    let c = a*b;
    return c;
}

function calcEstimatedPay(){
    let a = document.getElementById("estGrossPay").value;
    let b = document.getElementById("estimatedDeducted").value;
    let c = a-b;
    return c;
}

function deductedCalcJS(){
    document.getElementById("deductedCalc").value = calcDeducted();
}


function netPayCalcJS(){
    document.getElementById("netPayCalc").value = calcNetPay();
}

function grossPayCalcJS(){
    document.getElementById("grossPayCalc").value = calcGrossPay();
}

function estimatedPayCalcJS(){
    document.getElementById("estimatedPayCalc").value = calcEstimatedPay();
}