/*
 * 
 * 
 *
 * Copyright (c) 2015 ztMin
 * Licensed under the MIT license.
 */
(function ($) {
  "use strict";
  var Alert=function(option){
    this.defaults = {
      css:'', //追加css
      alert:'alert',  //背景元素样式名称
      abox:'abox',  //提示框元素样式名称
      acont:'acont',  //提示框内容元素样式名称
      close:'i_close',  //提示框关闭按钮样式名称
      width:0,  //提示框宽度
      height:0, //提示框高度
      html:'',  //提示框内容
      isScroll:true,  //是否阻止滚动
      fnBack:function(){} //回调函数
    };
    this.init(option);
  };
  //初始化
  Alert.prototype.init=function(option){
      if(typeof option==='object'){
          this.defaults=$.extend(this.defaults,option);
      }else{
        this.defaults.html=option;
      }

      this.alert=this.createAlert();
      this.abox=this.alert.find('.'+this.defaults.abox);
      this.closeBtn=this.abox.find('.'+this.defaults.close);
      this.acont=this.abox.find('.'+this.defaults.acont);

      this.setHtml(this.defaults.html);
      this.show();

      var _this=this;
      //关闭按钮
      this.closeBtn.on('click',function(){
        _this.close();
      });
      //阻止页面滚动
      if(this.defaults.isScroll){
        this.alert.on('DOMMouseScroll mousewheel',function(){return false;});
      }
  };
  //创建视图结构
  Alert.prototype.createAlert=function(){
    var html=
      '<div class="'+this.defaults.alert+' '+this.defaults.css+'">'+
        '<div class="'+this.defaults.abox+'">'+
          '<i class="'+this.defaults.close+'"></i>'+
          '<div class="'+this.defaults.acont+'"></div>'+
        '</div>'+
      '</div>';
    return $(html);
  };
  //显示
  Alert.prototype.show=function(){
    this.alert.appendTo('body');
    var abox=this.abox;
    var dw=this.defaults.width;
    var dh=this.defaults.height;
    var w=dw?dw:abox.width();
    var h=dh?dh:abox.height();
    var obj={
      width:w,
      height:h,
      marginTop:-h/2,
      marginLeft:-w/2
    };
    this.position(obj);
  };
  //设置位置
  Alert.prototype.position=function(obj){
    this.abox.css(obj);
  };
  //关闭
  Alert.prototype.close=function(){
    if(typeof this.defaults.fnBack === 'function'){
      this.defaults.fnBack(this);
    }
    this.alert.remove();
  };
  //设置html
  Alert.prototype.setHtml=function(html){
    if(typeof html==='object'){
      this.acont.html('');
      this.acont.append(html);
    }else{
      this.acont.html(html);
    }
  };
  //扩展工具方法
  $.extend({
    alert:function(o){
      return new Alert(o);
    }
  });
}(jQuery));