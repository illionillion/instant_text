'use strict';

function take_ss(){
  html2canvas(document.querySelector("#target")).then(canvas => { 
    var imgData = canvas.toDataURL();
    console.log(imgData);
    document.getElementById("result").src = imgData;
    document.getElementById("ss_donwload").setAttribute("download", "");
    document.getElementById("ss_donwload").href = imgData;
  });
}

function change_position(){
  const ele=document.getElementById('position_select');
  //selectの選択されたoptionの番号を取得
  const get_num=ele.selectedIndex;
  console.log(get_num);
  //optionのvalueを取得
  const get_value=ele.options[get_num].value;
  console.log(get_value);

  $('#target').css({"text-align":get_value});
}

window.addEventListener('DOMContentLoaded', ()=>{
  const target=document.querySelector('#target');
  target.addEventListener('focus',()=>{
    // console.log(target.innerHTML);
    if(target.innerHTML){
      const r=document.createRange();
      // console.log(r)
      r.setStart(target,0);
      r.setEnd(target,1);
      window.getSelection().addRange(r);
    }

  });
});

window.onload=function(){
  document.getElementById('ss_btn').addEventListener('click',function(){
    take_ss();
  });
  document.getElementById('position_select').addEventListener('change',function(){
    change_position();
  });
  //後で質問
  // document.getElementById('target').addEventListener('focus',function(){
  //   $(this).select();
  //   // this.innerHTML="";
  //   console.log(this);
  // });
}