CKEDITOR.dialog.add('date', function(editor){
    var escape = function(value){
        return value;
    };
    return {
        title: '日历控件',
        resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
        minWidth: 300,
        minHeight: 80,
        contents: [{
            id: 'cb',
            name: 'cb',
            label: 'cb',
            title: 'cb',
            elements: [{
                type: 'text',
                label: '请输入日期控件名称',
                id: 'lang',
                required: true,
            },{
                type:'html',
                html:'<span>说明：日历控件选择的日期、时间将回填到该输入框中。</span>'
            }]
        }],
        onOk: function(){
            lang = this.getValueOf('cb', 'lang');
            editor.insertHtml("<p>" + lang + "</p>");
        },
        onLoad: function(){
        }
    };
});