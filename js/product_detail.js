// 预览图
(()=>{
// 点击小图切换中图片
$("#icon_list").on("mouseover","li",e=>{
    var $li=$(e.target);
    var src=$li.attr("src");
    var i=src.lastIndexOf(".");
    var mSrc=src.slice(0,i)+"_m"+src.slice(i);
    //slice 返回的是截取后的新数组
    var lSrc="../"+src.slice(0,i)+"_l"+src.slice(i);
    $("#mImg").attr("src",`${mSrc}`);
    $("#largeDiv").attr("background",`${lSrc}`)
})
// 放大镜
var $a=$("#mediumDiv>a");
$("#superMask").hover(()=>{
     $a.css("display","none");
    $("#mask").css("display","block");
    $("#largeDiv").css("display","block");
},()=>{
    $a.css("display","block");
    $("#mask").css("display","none");
    $("#largeDiv").css("display","none");
})
const MWIDTH=175,
      SWIDTH=350;
$("#superMask").mousemove(e=>{
    var x=e.offsetX-MWIDTH/2,
        y=e.offsetY-MWIDTH/2,
        maxX=SWIDTH-MWIDTH,
        maxY=SWIDTH-MWIDTH;

    if(x<0){x=0}else if(x>maxX){x=maxX}
    if(y<0){y=0}else if(y>maxY){y=maxY}
    $("#mask").css({left:x, top:y});
    $("#largeDiv").css({
        backgroundPositionX:-16/7*x,
        backgroundPositionY:-16/7*y
    })
})
})();
// 商品详情和评价切换
(()=>{
    $(".main_tabs").on("click","[data-toggle=tab]",e=>{
        e.preventDefault();

        var $tar=$(e.target);
        var $li=$tar.parent();

        if(!$li.is(".active") ){
            $li.addClass("active").siblings().removeClass("active");
            var id=$tar.attr("href");
            $(`${id}`).css("display","block").prevAll().css("display","none");

        }
    })
})();
//各类评价切换
(()=>{
    $(".filter_list").on("click","[data-toggle=tab]",e=>{
        e.preventDefault();
        var $li=$(e.target).parent();
        if(!$li.is(".active")){
            $li.addClass("active").siblings().removeClass("active");
        }
    })
})()
// 猜你喜欢
$(()=>{
    var  imgs=[
        "products/p_43.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_43.jpg",
        "products/p_42.jpg",
        "products/p_43.jpg"
    ],
     i=imgs.length, $ul= $(".userLike_box>ul");
    $ul.html(
        ()=>{
            var str="";
            for(i =0;i<imgs.length;i++){
                str+=`<li>
                        <a >
                            <img src="`+imgs[i]
                            +`" >
                            <p>溢彩年华 原木生活实木加粗衣帽架 卧室办公挂衣架 落地晾衣架 DKC5548</p>
                        </a>
                        <h3>￥99.00</h3>
                    </li>`
            }
            return str;
        }
    )
    const WIDTH=186;
    var move=0;
    $ul.css("width",`${WIDTH*i}`);
        $(".userLike_prev").click(e => {
            if(!$(".userLike_prev").is(".disabled")) {
                e.preventDefault();
                move++;
                $ul.animate({left:40+WIDTH * move},500);
                checkA()
            }
        });
        $(".userLike_next").click(e => {
            e.preventDefault();
            if(!$(".userLike_next").is(".disabled")){
            move--;
            $ul.animate({left:40+WIDTH*move},500);
            // $ul.css("left", 40+WIDTH * move);
            checkA();
            }
        });

   if(i<=6){
       $(".userLike_box>a").addClass("disabled")
   }
   function checkA(){
       if(move==0){
           $(".userLike_prev").addClass("disabled");
       }else if(i+move==6){
           $(".userLike_next").addClass("disabled");
       }else{
           $(".userLike_box>a").removeClass("disabled")
       }
   }
})