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

// 空中花园部分数据滚动
function roll(t) {
    let gardenScroll = document.getElementById("garden-data-detail");
    let gardenScrollEnd = document.getElementById("garden-data-detail-scroll");
    let gardenScrollBox = document.getElementById("garden-data-scroll");
    gardenScrollEnd.innerHTML = gardenScroll.innerHTML;
    gardenScrollBox.scrollTop = 0;
    let timer = setInterval(rollStart, t);
    gardenScrollBox.onmouseover = function () {
        clearInterval(timer);
    }
    gardenScrollBox.onmouseout = function () {
        timer = setInterval(rollStart, t);
    }
}

function rollStart() {
    let gardenScroll = document.getElementById("garden-data-detail");
    let gardenScrollEnd = document.getElementById("garden-data-detail-scroll");
    let gardenScrollBox = document.getElementById("garden-data-scroll");
    if (gardenScrollBox.scrollTop >= gardenScroll.scrollHeight) {
        gardenScrollBox.scrollTop = 0;
    } else {
        gardenScrollBox.scrollTop++;
    }
}

// 监控平台实时数据部分
function scrollBox() {
    let speeds = 10
    let realTimeScrollBox = document.getElementById('realTime-data-detail')
    let scrollContent = document.getElementById('realTime-scroll-detail')
    let realTimeEnd = document.getElementById('realTime-scroll-end')
    realTimeEnd.innerHTML = scrollContent.innerHTML

    function scroll() {
        if (realTimeEnd.offsetWidth - realTimeScrollBox.scrollLeft <= 0) {
            realTimeScrollBox.scrollLeft -= scrollContent.offsetWidth
        } else {
            realTimeScrollBox.scrollLeft++
        }
    }

    let myTimer = setInterval(scroll, speeds)
    realTimeScrollBox.onmouseover = function () {
        clearInterval(myTimer)
    }
    realTimeScrollBox.onmouseout = function () {
        myTimer = setInterval(scroll, speeds)
    }
}

// 地图数据部分滚动
function mapDataScroll() {
    let speed = 10
    let mapScrollBox = document.getElementById('map-data-box')
    let mapScrollContent = document.getElementById('map-data-scroll')
    let mapScrollEnd = document.getElementById('map-data-scroll-end')
    mapScrollEnd.innerHTML = mapScrollContent.innerHTML

    function mapScroll() {
        if (mapScrollEnd.offsetWidth - mapScrollBox.scrollLeft <= 0) {
            mapScrollBox.scrollLeft -= mapScrollContent.offsetWidth
        } else {
            mapScrollBox.scrollLeft++
        }
    }

    let MyMar = setInterval(mapScroll, speed)
    mapScrollBox.onmouseover = function () {
        clearInterval(MyMar)
    }
    mapScrollBox.onmouseout = function () {
        MyMar = setInterval(mapScroll, speed)
    }
}

// 数据图标部分轮播
function banner () {
    var slideIndex = 0;
    var box = document.getElementsByClassName("slideshow-container")[0];
    var time;
    var slides = document.getElementsByClassName("rotate-detail");

    function plusSlides(index) {
        clearInterval(time);
        if (index == 1) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
        } else {
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            if (--slideIndex < 1) {
                slideIndex = 3;
            }
        }
        slides[slideIndex - 1].style.display = "block";
    }

    function showSlides() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
    }

    time = setInterval(showSlides, 1500);

    box.onmouseover = function () {
        clearInterval(time);
    }
    box.onmouseout = function () {
        time = setInterval(showSlides, 1500);
    }
}

window.onload = function () {
    scrollVideo()
    roll(50)
    scrollBox()
    mapDataScroll()
    banner()
}
