function soNDNN() {
    var n = 0;
    var sum = 0;
    while (sum < 10000) {
        n++;
        sum = sum + n;  
    }
    document.getElementById("ketQua1").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}