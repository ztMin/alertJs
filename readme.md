

## 使用方法：


```html
<script src="jquery.js"></script>
<script src="dist/alertjs.min.js"></script>
<script>
  jQuery(function ($) {
    $.alert('窗口'); //
    var option = {
      css:'indexAlert', //追加css
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
    var box=$.alert(option);
    /*
    *方法
    *****box.show(); 		//显示
    *****box.position();	//窗体位置设置，传入css对象
    *****box.close();		//关闭
    *****box.setHtml();		//设内容
    */
  });
</script>
```
