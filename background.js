chrome.tabs.create

chrome.browserAction.onClicked.addListener(function (tab) {
    var newURL = "https://truyen.pro/wp-admin/admin.php?page=dragon_leech";
    chrome.tabs.create({ url: newURL });
    var newURL = "https://hentaihay.top/wp-admin/admin.php?page=dragon_leech";
    chrome.tabs.create({ url: newURL });
    chrome.tabs.executeScript({ file: "content.js" });
});