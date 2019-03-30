function clickTruyen() {
    document.querySelector('.btn-auto-update-truyen').click();
};
function clickHentai() {
    document.querySelector('.btn-auto-update-hentai').click();
    setTimeout(function () {
        document.querySelector('.btn-auto-update-hentai').click();
    }, 20 * 60 * 1000);

};

if (window.location.href == "https://hentaihay.top/wp-admin/admin.php?page=dragon_leech") {
    setTimeout(function () {
        clickHentai();
        setInterval(clickHentai, 24 * 60 * 60 * 1000);
    }, 30 * 60 * 1000);
} else {
    clickTruyen();
    setInterval(clickTruyen, 24 * 60 * 60 * 1000);
}