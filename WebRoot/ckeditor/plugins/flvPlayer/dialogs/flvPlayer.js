CKEDITOR.dialog.add('flvPlayer', function (a) {
    var b = a.config;
    var escape = function (value) {
        return value;
    };
    return {

        title: '插入Flv视频',
        resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
        minWidth: 350,
        minHeight: 300,
        contents: [{
            id: 'info',
            label: '常规',
            accessKey: 'P',
            elements: [
                {
                    type: 'hbox',
                    widths: ['80%', '20%'],
                    children: [{
                        id: 'src',
                        type: 'text',
                        label: '源文件'
                    }, {
                        type: 'button',
                        id: 'browse',
                        filebrowser: 'info:src',
                        hidden: true,
                        align: 'center',
                        label: '浏览服务器'
                    }]
                },
                {
                    type: 'hbox',
                    widths: ['35%', '35%', '30%'],
                    children: [{
                        type: 'text',
                        label: '视频宽度',
                        id: 'mywidth',
                        'default': '470px',
                        style: 'width:50px'
                    }, {
                        type: 'text',
                        label: '视频高度',
                        id: 'myheight',
                        'default': '320px',
                        style: 'width:50px'
                    }, {
                        type: 'select',
                        label: '自动播放',
                        id: 'myloop',
                        required: true,
                        'default': 'false',
                        items: [['是', 'true'], ['否', 'false']]
                    }]//children finish
                }, {
                    type: 'textarea',
                    style: 'width:470px;height:320px',
                    label: '预览',
                    id: 'code'
                }]
        }, {
            id: 'Upload',
            hidden: false,
            filebrowser: 'uploadButton',
            label: '上传',
            elements: [{
                type: 'file',
                id: 'upload',
                label: '上传',
                size: 38
            },
            {
                type: 'fileButton',
                id: 'uploadButton',
                label: '上传到服务器',
                filebrowser: 'info:src',
                'for': ['Upload', 'upload']
            }]
        }],
        onOk: function () {
            mywidth = this.getValueOf('info', 'mywidth');
            myheight = this.getValueOf('info', 'myheight');
            myloop = this.getValueOf('info', 'myloop');
            mysrc = this.getValueOf('info', 'src');
            html = '' + escape(mysrc) + '';
            a.insertHtml("<object id=\"player\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" name=\"player\" width=\"" + mywidth + "\" height=\"" + myheight + "\"><param name=\"movie\" value=\"/ckeditor/plugins/flvPlayer/player/player.swf\" /><param name=\"allowfullscreen\" value=\"true\" /><param name=\"allowscriptaccess\" value=\"always\" /><param name=\"flashvars\" value=\"file=" + html + "&autostart=" + myloop + "\" /><embed type=\"application/x-shockwave-flash\" id=\"player2\" name=\"player2\" src=\"/ckeditor/plugins/flvPlayer/player/player.swf\" width=\"" + mywidth + "\" height=\"" + myheight + "\" allowscriptaccess=\"always\" allowfullscreen=\"true\" flashvars=\"file=" + html + "&autostart=" + myloop + "\"/></object>");

        },
        onLoad: function () {
        }
    };
});