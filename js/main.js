// console.log('ok');

function take_ss(){
  html2canvas(document.querySelector("#target")).then(canvas => { 
    var imgData = canvas.toDataURL();
    console.log(imgData);
    document.getElementById("result").src = imgData;
    document.getElementById("ss_donwload").setAttribute("download", "");
    document.getElementById("ss_donwload").href = imgData;
  });
}

// const take=take_ss();

window.onload=function(){
  document.getElementById('ss_btn').addEventListener('click',function(){
    take_ss();
  });
}