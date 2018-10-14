layui.use(['jquery', 'form'], function () {
    let form = layui.form;
    let $ = layui.jquery;
    let layer = layui.layer;
    //监听提交
    form.on('submit(formDemo)', function(data){
        $.ajax({
            url: "http://47.92.198.249:8080/getCode",
            type: 'get',
            data: {
                phoneNumber: data.field.phoneNumber,
                tId: "SADFHD"
            },
            success: function (res) {
                if (res.code === 0) {
                    if (res.data.length > 0) {
                        $("#codeContent").val(res)
                    } else {
                        layer.msg("获取验证码为空，请稍后重试！")
                    }
                }
            },
            error: function (e) {
                layer.msg("网络错误，请稍后重试！")
            }
        });
        return false;
    });
});