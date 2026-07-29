function test() {
    console.log("1");

    setTimeout(() => console.log("2"), 5000);

    console.log("3");
}

function httpGetAsync(theUrl, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}
httpGetAsync("https://picsum.photos/200/300", (data) => {
    console.log(data);
});