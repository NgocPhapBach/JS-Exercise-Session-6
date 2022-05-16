function tinhGiaiThua() {
    var n2 = document.getElementById("inpN2").value;
    var gt = 1;
    for(var i = 1; i <= n2; i++){
        gt = gt * i;
    }
    document.getElementById("ketQua3").innerHTML = gt;
}