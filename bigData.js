// 监控视频区域滚动
function scrollVideo() {
    let speed = 10
    let scrollBox = document.getElementById('video-detail')
    let scrollVideo = document.getElementById('video-scroll')
    let endScroll = document.getElementById('video-scroll-end')
    endScroll.innerHTML = scrollVideo.innerHTML

    function Marquee() {
        if (endScroll.offsetWidth - scrollBox.scrollLeft <= 0) {
            scrollBox.scrollLeft -= scrollVideo.offsetWidth
        } else {
            scrollBox.scrollLeft++
        }
    }

    let MyMar = setInterval(Marquee, speed)
    scrollBox.onmouseover = function () {
        clearInterval(MyMar)
    }
    scrollBox.onmouseout = function () {
        MyMar = setInterval(Marquee, speed)
    }
}

// 空中花园部分数据轮播(淡入淡出)
function bannerView() {

}

window.onload = function () {
    scrollVideo()
}
