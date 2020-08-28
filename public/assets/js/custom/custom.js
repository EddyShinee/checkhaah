var copyText = document.getElementById("copyText");
var textCode = document.getElementById("textCode");
var toastHTML = '<span>Sao chép thành công</span>';
var toast = {
    html: toastHTML,
    inDuration: 1,
    outDuration: 1,
    displayLength: 1500
}

var option = {
    startingTop: '10%',
    dismissible: false,
    preventScrolling: true

}

function copyTextFunction()
{
    textCode.select();
    textCode.setSelectionRange(0, 200);
    document.execCommand("copy");
    M.toast(toast);
}

copyText.addEventListener("click", copyTextFunction);
copyText.addEventListener("touch", copyTextFunction);

$(document).ready(function () {
    $('.modal').modal(option);
});

