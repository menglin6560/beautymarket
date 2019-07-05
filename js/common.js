// 主导航
(()=>{
var $ul=$("#nav .nav");
$ul.on("mouseover","li",e=>{
    var $li=$(e.target);
    $li.addClass("on").siblings().removeClass("on")
}
)
})()