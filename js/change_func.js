class Change{

  position(ele){
    //selectの選択されたoptionの番号を取得
    const get_num=ele.selectedIndex;
    // console.log(get_num);
    //optionのvalueを取得
    const get_value=ele.options[get_num].value;
    // console.log(get_value);
    // this.data=get_value;//thisはclass Change??
    $('#target').css({"text-align":get_value});
  }

  color(ele){

    if(ele.name==='text_color'){
      $('#target').css('color',ele.value);
      return;
    }
    if(ele.name==='background_color'){
      $('#target').css('background-color',ele.value);
      return;
    }

  }

  font_size(ele){
    // console.log(ele.value);
    $('#target').css('font-size',ele.value+'px');
  }

}