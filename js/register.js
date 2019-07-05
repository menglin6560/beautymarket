// 用户点击输入框后下方出现提示
$(()=>{
    $("#register tbody ").on("focus","tr.input",e=>{
        e.preventDefault();
        var $tr=$(e.target).parent().parent().parent();
        if ($tr.next().hasClass("input_tip")){
            $tr.next().css("visibility","visible");
        }
    })
    //文本框失去焦点且输入内容为空时，提示隐藏
    $("#register tbody ").on("blur","tr.input",e=>{
        e.preventDefault();
        var $tr=$(e.target).parent().parent().parent();
        var str=$(e.target).val();
        if(!str){
            $tr.next().css("visibility","hidden");
        }
    })

    // 验证用户名  失去焦点时验证，验证失败，再次获得焦点并输入后，变为平常的提醒，失去焦点后再次验证
    var $tipTxt= $(".uName_tip .tip_txt span ");
    $(".uName").blur(e=>{
        var str=$(e.target).val();
        if(str){
            //(1)格式错误，仅支持字母、数字、"-"的 组合
            var reg1=/^\w+$/ig,
                bool1=reg1.test(str),
                reg2=/^.{4,20}$/ig,
                bool2=reg2.test(str),
                reg3=/^\d{4,20}$/ig,
                bool3=reg3.test(str),
                reg=/^\w{4,20}$/ig,
                bool=reg.test(str);
            $(".uName_tip i").css({
                backgroundPositionX:-19,
                backgroundPositionY:-116
            });

            $(".uName_tip").css("visibility","visible");
            $tipTxt.css("color","#FB550C");
            $(e.target).css("borderColor","#FB550C");
            if(!bool1){
                $tipTxt.text(`格式错误，仅支持字母、数字、"-"的 组合`);
            }else if(!bool2){
            // (2)长度只能在4-20个字符之间 短或者长
            // var reg2=/^.{4,20}$/ig,
            //     bool2=reg2.test(str);
                $tipTxt.text("长度只能在4-20个字符之间");
            }else if(bool3){
            //（3）用户名不能为纯数字
            // var reg3=/^[0,9]{4,20}$/ig,
            //      bool3=reg3.test(str);
                $tipTxt.text("用户名不能为纯数字");
            }else if(bool){
                $(".uName_tip i").css({
                    backgroundPositionX:-2,
                    backgroundPositionY:-133
                })
                $tipTxt.text("用户名可以使用");
                $tipTxt.css("color","#90B71B");
                $(e.target).css("borderColor","#ccc")
            }
        }
    });
    $(".uName").focus(e=>{
        $(".uName_tip i").css({
            backgroundPositionX:-2,
            backgroundPositionY:-116
        });
        $tipTxt.text(`支持字母、数字或"_"的组合，4-20个字符`);
        $tipTxt.css("color","#666");
        $(e.target).css("borderColor","#ccc")
    })

})
$(()=>{
    // 验证密码
    //建议使用字母、数字及符号两种以上的组合，6-20位字符
    // 完整正则表达式   !@#$%^&*
    var reg=/^[u0020-u00bf]{6-20}$/ig;
    // 长度只能在6-20个字符之间
       var reg1=/^.{6,20}$/ig,
           bool1=reg1.test(str),
    //只有一种类型密码，有被盗风险,建议使用字母、数字和符号两种及以上组合
           reg2=/^([0,9]|[A-Za-z]|[!@#$%^&*]){6,20}$/ig,
    //字母+数字，字母+特殊字符，数字+特殊字符 安全强度适中，可以使用三种以上的组合来提高安全强度
          reg3=/^([A-Za-z0-9]|([A-Za-z]+[!@#$%^&*]+)|([0-9]+[!@#$%^&*]+)){6,20}$/ig,
   //字母+数字+特殊字符  你的密码很安全
         reg4=/^([A-Za-z]+[0-9]+[!@#$%^&*]+){6,20}$/ig;
    $(".uPwd").blur(e=>{
        var str=$(e.target).val();
        if(str){
            //(1)格式错误，仅支持字母、数字、"-"的 组合
            var reg1=/^\w+$/ig,
                bool1=reg1.test(str),
                reg2=/^.{4,20}$/ig,
                bool2=reg2.test(str),
                reg3=/^\d{4,20}$/ig,
                bool3=reg3.test(str),
                reg=/^\w{4,20}$/ig,
                bool=reg.test(str);
            $(".uName_tip i").css({
                backgroundPositionX:-19,
                backgroundPositionY:-116
            });
            $(".uName_tip").css("visibility","visible");
            $tipTxt.css("color","#FB550C");
            $(e.target).css("borderColor","#FB55OC")
            if(!bool1){
                $tipTxt.text(`格式错误，仅支持字母、数字、"-"的 组合`);
            }else if(!bool2){
                // (2)长度只能在4-20个字符之间 短或者长
                // var reg2=/^.{4,20}$/ig,
                //     bool2=reg2.test(str);
                $tipTxt.text("长度只能在4-20个字符之间");
            }else if(bool3){
                //（3）用户名不能为纯数字
                // var reg3=/^[0,9]{4,20}$/ig,
                //      bool3=reg3.test(str);
                $tipTxt.text("用户名不能为纯数字");
            }else if(bool){
                $(".uName_tip i").css({
                    backgroundPositionX:-2,
                    backgroundPositionY:-133
                })
                $tipTxt.text("用户名可以使用");
                $tipTxt.css("color","#90B71B");
            }
        }
    });
})