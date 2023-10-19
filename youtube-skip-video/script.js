const clear = (() => {
    let count = 0;
    const defined = v => v !== null && v !== undefined;
    const timeout = setInterval(() => {
        try {
            const ad = [...document.querySelectorAll('.ad-showing')][0];
            if (defined(ad)) {
                const videos = document.querySelectorAll('video');
                for (let video of videos) {
                    try {
                        if (defined(video)) {
                            count++;
                            video.currentTime = video.duration;
                            console.log("SKIP VIDEO DURATION COUNT:", count);
                            break;
                        }
                    } catch (err) {}
                }
            }
        } catch (err) {}
        const buttonClasses = ['.ytp-ad-skip-button', '.ytp-ad-skip-button-text', '.ytp-ad-text'];
        for (let buttonClass of buttonClasses) {
            const skipButtons = document.querySelectorAll(buttonClass);
            for (let skipButton of skipButtons) {
                try {
                    if (defined(skipButton)) {
                        count++;
                        skipButton.click();
                        console.log("SKIP VIDEO BUTTON COUNT:", count)
                        break;
                    }
                } catch (err) {}
            }
        }
        const tempStopPopup = document.querySelectorAll('.ytd-popup-container');
        if (tempStopPopup != undefined && tempStopPopup.length > 0) {
            const stopButton = [...document.querySelectorAll('.yt-spec-touch-feedback-shape__fill')][0];
            if (defined(stopButton)) {
                stopButton.click();
                console.log("CLICK TO CONTINUE FROM TEMPORARY STOP VIDEO");
            }
        }
    }, 500);
    return function() {
        clearTimeout(timeout);
    }
})();
console.log("YOUTUBE ADS SKIP IS RUNNING");