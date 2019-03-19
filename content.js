function clickAutoClick() {
    document.querySelector('.btn-auto-update').click();
};
clickAutoClick();
setInterval(clickAutoClick, 24 * 60 * 60 * 1000);