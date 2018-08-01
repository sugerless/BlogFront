(function() {
  $(function() {
    var $preview, editor, mobileToolbar, toolbar;
    Simditor.locale = 'en-US';
    //toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
    //mobileToolbar = ["bold", "underline", "strikethrough", "color", "ul", "ol"];
    editor = new Simditor({
      textarea: $('#txt-content'),
      placeholder: '开启全新的一篇....',
      //toolbar: toolbar,
      pasteImage: true,
      defaultImage: 'assets/images/image.png',
      upload:{
        url:'http://titia.com/api/uploadimage',
        params:null,
        fileKey:'upload_file',
        connectionCount:1,
        leaveConfirm:'正在编辑图片，确认要离开么？'
      }
    });
    $preview = $('#preview');
    if ($preview.length > 0) {
      return editor.on('valuechanged', function(e) {
        return $preview.html(editor.getValue());
      });
    }
  });

}).call(this);
