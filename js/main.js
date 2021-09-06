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

  const change=new Change();

  let root = document.documentElement; //htmlのルート要素を取得
  let style = window.getComputedStyle(root).getPropertyValue('font-size'); //ルート要素のcssプロパティを全て取得し、その中からフォントサイズを取得
  let stFontSize = parseFloat(style); //float型の数値に変換
  $('#font_size').val(stFontSize);
  $('#font_size')[0].addEventListener('change',function(){ change.font_size(this); });
  $('#ss_btn')[0].addEventListener('click', function(){ take_ss(); });
  $('#position_select')[0].addEventListener('change',function(){ change.position(this); });
  $('#text_color')[0].addEventListener('change',function(){change.color(this);});
  $('#background_color')[0].addEventListener('change',function(){change.color(this);});
  $('#background_image')[0].addEventListener('change',function(){change.image(this);});
  $('#image_reset')[0].addEventListener('click',function(){change.image_reset();});

}