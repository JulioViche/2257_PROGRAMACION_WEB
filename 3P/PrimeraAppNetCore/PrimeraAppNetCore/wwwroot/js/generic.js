async function fetchGet(url, resTipo, callback) {
    try {
        let raiz = document.getElementById("hiddenInput").value;
        let urlCompleta = window.location.protocol + '//' + window.location.host + '/' + raiz + url;

        let res = await fetch(urlCompleta);
        if (resTipo === 'json') res = await res.json();
        if (resTipo === 'text') res = await res.text();

        callback(res);
    } catch (e) {
        alert(e);
    }
}