$(
    // 今日推荐按钮
    ()=>{
    var  imgs=[
            "products/qq/p_15.jpg",
            "products/qq/p_15.jpg",
            "products/qq/p_15.jpg",
            "products/qq/p_15.jpg",
            "products/qq/p_15.jpg",
            "products/qq/p_15.jpg",
            "products/qq/p_15.jpg",
            "products/qq/p_15.jpg"
        ],
        i=imgs.length, $ul= $(".recommend_box>ul");
    $ul.html(
        ()=>{
            var str="";
            for(i =0;i<imgs.length;i++){
                str+=`<li>
                <a ><img src="`+imgs[i]+`" alt=""></a>
                    <div>
                    <p>
                    <a >洗颜专科 柔澈泡沫 洁面乳 资生堂旗下</a>
                </p>
                <span>￥231.00</span>
                <h6>热销：<span>1234</span>件</h6>
                </div>
                </li>`
            }
            return str;
        }
    )
    const WIDTH=300;
    var move=0;
    $ul.css("width",`${WIDTH*i}`);
    $(".prev").click(e => {
        if(!$(".userLike_prev").is(".disabled")) {
            e.preventDefault();
            move++;
            if(move==1){move=-1};
            $ul.animate({left:WIDTH*move*4},500);
            $(".recommend_title>p>a.active").removeClass("active").siblings().addClass("active");

        }
    });
    $(".next").click(e => {
        e.preventDefault();
            move--;
            if(move==-2){move=0};
           $ul.animate({left:WIDTH * move*4},500);
        $(".recommend_title>p>a.active").removeClass("active").siblings().addClass("active");
    });

}
)
// 筛选 更多
$(
    ()=>{
        var $more=$("#filter .more"),
            $dl=$(".filter_brand>dl"),
            $div=$(".filter_brand>div");
        var startHeight=Number($dl.css("height").slice(0,-2)),
            clicked=0;
        $more.click(e=>{
            e.preventDefault();
            clicked++;
            $dl.height("auto");
            var endHeight=$dl.height();
            if(clicked%2==1){
            $more.children(":last").attr("class","iconfont icon-shangjiantou");
            $dl.height(startHeight).animate({height:endHeight},500);
            $div.height(startHeight).animate({height:endHeight},500);
            }else if(clicked%2==0){
                $more.children(":last").attr("class","iconfont icon-xiajiantou");
                $dl.height(endHeight).animate({height:startHeight},500);
                $div.height(endHeight).animate({height:startHeight},500);
            }

        })
    }
)
// 点击筛选中的标签后，面包屑导航部分添加相应标签内容
$(
    ()=>{
        var $ul=$("#filter dl ul");
        $ul.on("click","li",e=>{
            var $tar=$(e.target);
            var txt=$tar.text();

        })
    }
)
// 销量排行 手风琴
$(()=>{
    $("#rank>ul").on("mouseover","li",e=>{
        var $li=$(e.target).parent();
        $li.addClass("active").siblings().removeClass("active");
    })
})
// 收藏按钮动画
// $(()=>{
//     $(".collect>em")
// })