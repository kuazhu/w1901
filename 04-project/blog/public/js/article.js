/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-05 15:42:14
*/
;(function($){
    //配置富文本编辑器 ckeditor
    ClassicEditor.create(document.querySelector( '#content' ),{
        language:'zh-cn',
        ckfinder:{
            uploadUrl:"/article/uploadImage"
        }
    })
    .catch(error => {
        console.log( 'ckeditor config err:',error );
    })
})(jQuery);