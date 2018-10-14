layui.use(['jquery', 'form'], function () {
    let form = layui.form;
    let $ = layui.jquery;
    let layer = layui.layer;
    //监听提交
    form.on('submit(addCode)', function(data){
        // let $this = $(this);
        // if (!$this.hasClass("layui-btn-disabled")) {
        //     $.ajax({
        //         url: "http://sms.51dangao.cn/api/platform/get_item_msg",
        //         type: 'post',
        //         data: {
        //             mobile: data.field.phoneNumber,
        //             tid: data.field.tid
        //         },
        //         success: function (res) {
        //             $("#codeContent").val(res);
        //             let resArr = res.split("\n");
        //             if (resArr.length > 0) {
        //                 let codeArr = [];
        //                 resArr.forEach(function (item) {
        //                     let itemArr = item.split("|");
        //                     codeArr.push({
        //                         phone: itemArr[2],
        //                         content: itemArr[1].substring(0, itemArr[1].indexOf("[")),
        //                     })
        //                 })
        //             }
        //         },
        //         error: function (e) {
        //             layer.msg("网络错误，请稍后重试！")
        //         }
        //     });
        // }
        // $this.addClass("layui-btn-disabled");
        // setTimeout(function () {
        //     $this.removeClass("layui-btn-disabled");
        // }, 5000);
        let i = 0;
        let all = [];
        while(i<1){
            all.push(add(i,data));
            i++
        }
        function add(i,data) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: "http://47.92.198.249:8080/addCode",
                    type: 'post',
                    data: {
                        tId: data.field.tId,
                        phoneNumber: parseInt(data.field.phoneNumber)-i +"",
                        codeContent: Math.random()*1000000+"---"+Math.random()*1000+"【tentsen】"
                    },
                    success: function (res) {
                        console.log(i);
                        resolve();
                    },
                    error: function (e) {
                        reject(e);
                    }
                });
            })
        }
        Promise.all(all).then(function () {
            layer.msg("添加完成！");
        }).catch(function (e) {
            layer.msg("网络错误，请稍后重试！");
        });
        return false;
    });
});