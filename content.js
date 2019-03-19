function clickAutoClick() {
    document.querySelector('.btn-auto-update').click();
};
clickAutoClick();
setInterval(clickAutoClick, 60 * 60 * 60 * 1000);