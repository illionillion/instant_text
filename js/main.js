'use strict';

function take_ss(){
  html2canvas(document.querySelector("#target")).then(canvas => { 
    const imgData = canvas.toDataURL();
    console.log(imgData);
    document.getElementById("result").src = imgData;
    document.getElementById("ss_donwload").setAttribute("download", "");
    document.getElementById("ss_donwload").href = imgData;
  });
}

function change_position(ele){
  //selectの選択されたoptionの番号を取得
  const get_num=ele.selectedIndex;
  console.log(get_num);
  //optionのvalueを取得
  const get_value=ele.options[get_num].value;
  console.log(get_value);

  $('#target').css({"text-align":get_value});
}


function change_color(ele){

  if(ele.name==='text_color'){
    $('#target').css('color',ele.value);
    return;
  }
  if(ele.name==='background_color'){
    $('#target').css('background-color',ele.value);
    return;
  }

}

window.addEventListener('DOMContentLoaded', ()=>{
  const target=document.querySelector('#target');
  target.addEventListener('focus',()=>{
    // console.log(target.innerHTML);
    if(target.innerHTML){
      const r=document.createRange();
      console.log(r)
      r.setStart(target,0);
      r.setEnd(target,target.childNodes.length);
      console.log(target.childNodes.length);
      console.log(r)
      window.getSelection().addRange(r);
    }

  });
});


window.onload=function(){
  document.getElementById('ss_btn').addEventListener('click',function(){
    take_ss();
  });
  document.getElementById('position_select').addEventListener('change',function(){
    change_position(this);
  });
  //後で質問
  // document.getElementById('target').addEventListener('focus',function(){
  //   // $(this).select();
  //   // document.execCommand('SelectAll');//全て選択
  //   // this.innerHTML="";
  //   //rangeオブジェクトの作成
  //   const range = document.createRange();
  //   //取得した要素の内側を範囲とする
  //   range.selectNodeContents(this);
  //   //範囲を選択状態にする
  //   window.getSelection().addRange(range);
  //   console.log(this);
  // });
  document.getElementById('text_color').addEventListener('change',function(){change_color(this);});
  document.getElementById('background_color').addEventListener('change',function(){change_color(this);});
}