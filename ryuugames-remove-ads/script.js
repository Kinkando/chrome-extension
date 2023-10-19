console.log("RYUUGAMES REMOVE ADS IS RUNNING");
const url = window.location.href;
const selectors = [
    '#td-outer-wrap > div.tdc-header-wrap > div > div.td-banner-wrap-full.td-container-wrap > div > div > div > div > a > img',
    '#block-32 > figure > a > img',
    '#block-34 > figure > a > img',
    'div.td-post-template-8-box > div > div > div.td-pb-span8.td-main-content > div > div.td-post-content.tagdiv-type > div.td-a-rec.td-a-rec-id-content_bottom.tdi_2.td_block_template_5 > div > a > img',
    '#td-outer-wrap > div.tdc-footer-wrap > div > div > div > div > div > a > img',
];
for (let selector of selectors) {
    let ads = document.querySelectorAll(selector);
    for (let ad of ads) {
        ad.remove();
    }
}