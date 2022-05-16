function tinhTong() {
    var x = document.getElementById("inpX").value;
    var n1 = document.getElementById("inpN1").value;
    var sum = 0;
    for (var i = 1; i <= n1; i++){
        sum += Math.pow(x, i);
    }
    document.getElementById("ketQua2").innerHTML = sum;
}
