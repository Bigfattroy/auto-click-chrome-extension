function clickTruyen() {
    document.querySelector('.btn-auto-update-truyen').click();
};
function clickHentai() {
    document.querySelector('.btn-auto-all-novel-hentai').click();
    setTimeout(function(){ 
        document.querySelector('.btn-auto-update-hentai').click();
    }, 20 * 60 * 1000);

};

clickTruyen();

setTimeout(function(){ 
    clickHentai();
}, 60 * 60 * 1000);


setInterval(clickTruyen, 24 * 60 * 60 * 1000);

setTimeout(function(){ 
    setInterval(clickHentai, 24 * 60 * 60 * 1000);
}, 30 * 60 * 1000);
