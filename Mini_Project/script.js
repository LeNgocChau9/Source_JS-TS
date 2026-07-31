const fetchProducts = async() => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);

    const tbody = document.querySelector("#Products tbody");

    if (data && data.products && data.products.length) {
        data.products.forEach((product) => {
            tbody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td><img src="${product.thumbnail}" alt="${product.title}"></td>
            </tr>
            `
        })
    }
}
fetchProducts();