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

window.onload = function () {
	scrollVideo()
    roll(50)
}
