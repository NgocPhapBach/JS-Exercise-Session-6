function divChanLe() {
  var content = "";
  for (var i = 1; i < 11; i++) {
    if (i % 2 == 0) {
      content += "<div style ='background: red; color: yellow'>Div chẵn</div>";
    } else {
      content += "<div style ='background: blue; color: yellow'>Div lẻ</div>";
    }
    document.getElementById("div").innerHTML = content;
  }
  
}
