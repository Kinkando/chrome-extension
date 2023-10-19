console.log("ANIME-SUGOI REMOVE ADS IS RUNNING");
const url = window.location.href;
const selectors = [
    // Home Page
    'body > div:nth-child(2) > div > div.col-md-8',
    'body > div:nth-child(3) > div > center',
    '#bt-ads > center > a:nth-child(2) > img',
    '#bt-ads > a',

    // Episode List Page
    'body > div:nth-child(3) > div > div.col-lg-9 > div > div.panel-body > center:nth-child(4) > a > img',
    'body > div:nth-child(3) > div > div.col-lg-9 > div > div.panel-body > center:nth-child(4)',

    // Video Page
    'body > div:nth-child(3) > div > div.col-lg-9 > div > div.panel-body > center:nth-child(9)',
    'body > div:nth-child(3) > div > div.col-lg-9 > div > div.panel-body > center:nth-child(8)',
];
for (let selector of selectors) {
    let ads = document.querySelectorAll(selector);
    for (let ad of ads) {
        ad.remove();
    }
}
// if (url.includes("/play/")) {
//     const videoPlayers = document.getElementsByTagName("iframe");
//     for (let videoPlayer of videoPlayers) {
//         videoPlayer.setAttribute("data-cookiescript", "accepted");
//         videoPlayer.setAttribute("alt", "");
//         videoPlayer.setAttribute("data-cookiecategory", "functionality");
//         videoPlayer.setAttribute("data-src", videoPlayer.src)
//         videoPlayer.removeAttribute("src");
//     }
//     const videoPlayer = document.getElementById('load-iframe')
//     videoPlayer.addEventListener("click", (event) => {
//         event.preventDefault();
//     })
// }