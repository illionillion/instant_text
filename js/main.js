'use strict';


//スクリーンショット
function take_ss(){

  html2canvas($("#target")[0]).then(canvas => { 

    const imgData = canvas.toDataURL();
    console.log(imgData);
    $("#result").attr("src",imgData);
    $("#ss_donwload").attr("download", "");
    $("#ss_donwload").attr("href",imgData);

  });

}


//エディタの中身をクリック時に勝手に選択
function all_select(parentElem){

  if(parentElem.innerText==="文字を入力"){ //初回のみ発動させるため

    // ユーザーの選択状態を得る
    let selection = document.getSelection();

    // 対象子要素を選択状態にする
    selection.selectAllChildren(parentElem);

  } 

}

//ready(HTMLが読み込まれてから実行)
$(function(){

  const change=new Change();

  let root = document.documentElement;                                    //htmlのルート要素を取得
  let style = window.getComputedStyle(root).getPropertyValue('font-size');//ルート要素のcssプロパティを全て取得し、その中からフォントサイズを取得
  let stFontSize = parseFloat(style);                                     //float型の数値に変換
  $('#font_size').val(stFontSize);                                        //フォントサイズの初期値をinput:numberに反映


  //イベント発火
  $('#font_size')[0].addEventListener('change',function(){ change.font_size(this); });
  $('#ss_btn')[0].addEventListener('click', function(){ take_ss(); });
  $('#position_select')[0].addEventListener('change',function(){ change.position(this); });
  $('#text_color')[0].addEventListener('change',function(){change.color(this);});
  $('#background_color')[0].addEventListener('change',function(){change.color(this);});
  $('#background_image')[0].addEventListener('change',function(){change.image(this);});
  $('#image_reset')[0].addEventListener('click',function(){change.image_reset();});
  $('#target')[0].addEventListener('click',function(){all_select(this);});
  $('#rotate')[0].addEventListener('click',function(){change.rotate90();});
  change.canvas_size();
  window.addEventListener('resize', function(){change.canvas_size()});


});