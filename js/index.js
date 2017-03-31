(function() {
    changeQr();
    var timer, old;

    function changeQr() {
        var text = document.querySelector('textarea').value;
        if (old == text) return;
        old = text;
        timer && clearTimeout(timer);
        timer = setTimeout(function() {
            timer = 0;
            emptyEle('#qrWrap').appendChild(new AraleQRCode(text));
        }, 500);
    }

    document.querySelector('textarea').addEventListener('input', changeQr);

    function emptyEle(seletor) {
        var ele = document.querySelector(seletor);
        for (var i = 0; i < ele.childElementCount; i++) {
            var child = ele.childNodes[i];
            child.parentElement.removeChild(child);
        }
        return ele;
    }
})()