'use strict';


//スクリーンショット
function take_ss(){

  html2canvas($("#target")[0]).then(canvas => {

    const imgData = canvas.toDataURL();
    // console.log(imgData);
    $("#result").attr("src",imgData);
    $("#ss_donwload").attr("download", "inst_img");
    // $("#ss_donwload").attr("download", imgData);
    $("#ss_donwload").attr("href",imgData);

    // let url="https://twitter.com/intent/tweet?text=insttext%20"+location.href+"%20"+imgData; 
    // $("#share_tweet").attr("href",url);

    $("#viewer_float").removeClass("none");
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
  $('#font_size').change(function(){change.font_size(this);})
  $('#ss_btn').click(function(){ take_ss(); });
  $('#position_select').change(function(){ change.position(this); });
  $('#text_color').change(function(){change.color(this);});
  $('#background_color').change(function(){change.color(this);});
  $('#background_image').change(function(){change.image(this);});
  $('#image_reset').click(function(){change.image_reset();});
  $('#target').click(function(){all_select(this);});
  $('#rotate').click(function(){change.rotate90();});
  $("#close_float").click(function() { $("#viewer_float").addClass("none"); })
  change.canvas_size();
  $(window).resize(function(){change.canvas_size()}); //windowイベントは$(window)と記述する

  // setInterval(() => {
  //   console.log(change);
  // }, 1000);
});