class Change{

  constructor() { /* コンストラクタ */
    this.rotate =0;
    this.textposition="center";
    this.textcolor="#000000";
    this.textbackgroundcolor="#ffffff";
    this.textsize=16;
  }

  //テキストの位置を変える
  position(ele){

    //selectの選択されたoptionの番号を取得
    const get_num=ele.selectedIndex;

    //optionのvalueを取得
    const get_value=ele.options[get_num].value;
    this.textposition=get_value;
    $('#target').css("text-align",get_value);
  
  }

  //文字色・背景色を変える
  color(ele){

    if(ele.name==='text_color'){
      $('#target').css('color',ele.value);
      this.textcolor=ele.value;
      return;
    }
    if(ele.name==='background_color'){
      $('#target').css('background-color',ele.value);
      this.textbackgroundcolor=ele.value;
      return;
    }

  }

  //文字サイズを変える
  font_size(ele){
    this.textsize=Number(ele.value);
    $('#target').css('font-size',ele.value+'px');

  }

  //90度回転
  rotate90(){
    this.rotate+=90;
    $('#target').css("transform","rotate("+this.rotate+"deg)")
  }

  //背景画像を設定する
  image(ele){

    let image=$("#"+ele.id).prop('files')[0];
    if(image){
      if(!image.type.match('image.*')){
        alert('画像と認識されません');
        return;
      }
      let fileReader = new FileReader();
      fileReader.onloadend = function() {
          $('#target').css('background-image','url('+fileReader.result+')');
      }
      fileReader.readAsDataURL(image);
    }

  }

  //背景画像をリセットする
  image_reset(){

    $('#target').css('background-image','none');

  }

  //エディタと画像の画面を正方形にするため
  canvas_size(){

    let canvas_width=$("#canvas").css("width");
    canvas_width= Number(canvas_width.replace( "px" , "" ));

    $("#canvas").css("height",canvas_width);
    // $("#viewer_float").css("width",canvas_width);
    $("#viewer").css("width",canvas_width);
    $("#viewer").css("height",canvas_width);

  }

}