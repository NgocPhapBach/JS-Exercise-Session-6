function tinhTong() {
    var x = document.getElementById("inpX").value;
    var n1 = document.getElementById("inpN1").value;
    var m = 0;
    var sum = 0;
    for (var i = 1; i <= n1; i++){
        m = Math.pow(x, i);
        sum += m;
    }
    document.getElementById("ketQua2").innerHTML = sum;
}
