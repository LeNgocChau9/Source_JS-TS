function httpGetAsync(theUrl, resolve) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve);
});

const promis2 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve);
});

const Async = async() => {
    const respone = await currentPromise;
    document.getElementById("img_1").setAttribute('src', respone.responseURL);

    const respone1 = await promis2;
    document.getElementById("img_2").setAttribute('src', respone1.responseURL);
}

Async();