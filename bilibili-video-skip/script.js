console.log("BiliBili Video Skipper is running!");
const interval = setInterval(() => {
    const video = document.querySelector('video[title="Advertisement"]');
    if (video) {
        video.currentTime = video.duration;
    }
}, 500);