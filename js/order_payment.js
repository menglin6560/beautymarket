// 选择地址
(
    ()=>{
    $(".addr_box ").on("click","li",e=>{
        var $li=$(e.target).parent();
        if(!$li.hasClass("addr_choose")){
            $li.addClass("addr_choose").siblings().removeClass("addr_choose")
        }
    })
    }
)()
// 选择快递方式
$(
    ()=>{
        $("#express_delivery>ul ").on("click","li",e=>{
            console.log(1)
            var $li=$(e.target).parent();
            if(!$li.hasClass("selected")){
                $li.addClass("selected").siblings().removeClass("selected");
            }
        })
    }
)
// 选择支付方式

   $( ()=>{
        $("#payment>ul ").on("click","li",e=>{
            var $li=$(e.target).parent();
            if(!$li.hasClass("active")){
                $li.addClass("active").siblings().removeClass("active");
            }
        })
    }


   )