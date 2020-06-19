$(document).ready(function () {
    $(window).on("load",function () { //图片加载完成之后再显示
        ImgLocation();
        // 加载动态图片
        var dataImg = {"data":[{"src":""},{"src":""}]};
        $(window).scroll(function () {
            // 获取最后一张图片距离顶端的高度 - 自身高度一半
            if (getSideHeight()){
                $.each(dataImg.data,function (index,value) {
                    // 创建标签
                    var pin = $("<div>").addClass("pin").appendTo("#main");
                    var box = $("<div>").addClass("box").appendTo(pin);
                    var img = $("<img>").attr("src","images/" + $(value).attr("src")).appendTo(box);
                    ImgLocation();
                })
            }
        })
    })
});

function getSideHeight() {
    var box = $(".pin");
    var lastImgHeight = (box.last().get(0)).offsetTop - Math.floor(box.last().height() / 2);
    var documentHeight = $(document).height(); // 获取当前窗口高度
    var scrollHeight = $(window).scrollTop(); // 获取滚动的距离
    return (lastImgHeight < documentHeight + scrollHeight) ? true : false;
}

function ImgLocation() {
    var box = $(".pin"); // 返回一个数组
    var boxWidth = box.eq(0).width(); // 每张图片的宽度
    var num = Math.floor($(window).width() / boxWidth); // 取整操作 窗口宽度除以每张图片的宽度 能放下图片数量
    var numArr = []; // 数组 存放图片的高度
    box.each(function (index,value) { // 遍历
        var boxHeight = box.eq(index).height(); // 获取每张图片的高度
        // console.log(boxHeight);

        if (index < num){ // 第一排
            numArr[index] = boxHeight;
        }else { // 第二排
            var minboxHeight = Math.min.apply(numArr,numArr); // 获取第一排高度最小的图片
            // console.log(minboxHeight);
            // 获取下标
            // jQuery.inArray(value,数组,数组索引值0)
            var minIndex = $.inArray(minboxHeight,numArr); // 最小高度图片的索引值
            // console.log(minIndex);
            $(value).css({
                position:"absolute",
                top:minboxHeight,
                left:box.eq(minIndex).position().left
            });
            numArr[minIndex] += box.eq(index).height(); // 新高度
        }
    })
}