function test() {
    console.log("1");

    setTimeout(() => console.log("2"), 5000);

    console.log("3");
}

function httpGetAsync(theUrl, resolve) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}
// httpGetAsync('https://picsum.photos/200/300', (data) => {
//     console.log(data);
//     document.getElementById("img_1").setAttribute('src', data.responseURL);
//     httpGetAsync('https://picsum.photos/200/300', (data) => {
//         console.log(data);
//         document.getElementById("img_2").setAttribute('src', data.responseURL);
//         httpGetAsync('https://picsum.photos/200/300', (data) => {
//             console.log(data);
//             document.getElementById("img_3").setAttribute('src', data.responseURL);
//             httpGetAsync('https://picsum.photos/200/300', (data) => {
//                 console.log(data);
//                 document.getElementById("img_4").setAttribute('src', data.responseURL);
//             });
//         });
//     });

// });


const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve);

});

const promise2 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve);

});
currentPromise
    .then((data) => {
        console.log(data);
        document.getElementById("img_1").setAttribute('src', data.responseURL);
        return promise2;
    })
    .then((data) => {
        document.getElementById("img_2").setAttribute('src', data.responseURL);
    })
    .catch((err) => {
        console.log("error");
    })

test();