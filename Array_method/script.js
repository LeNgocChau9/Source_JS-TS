//filter => lọc dữ liệu
const product1 = {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 10.48,
    "rating": 2.56,
    "stock": 99,
    "tags": "mascara"
}
const product2 = {
    "id": 2,
    "title": "Eyeshadow Palette with Mirror",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "category": "beauty",
    "price": 19.99,
    "discountPercentage": 18.19,
    "rating": 2.86,
    "stock": 34,
    "tags": [
        "beauty",
        "eyeshadow"
    ],
    "brand": "Glamour Beauty",
    "sku": "BEA-GLA-EYE-002",
    "weight": 9
}

const product3 = {
    "id": 29,
    "title": "Juice",
    "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    "category": "groceries",
    "price": 3.99,
    "discountPercentage": 12.06,
    "rating": 3.94,
    "stock": 50,
    "tags": [
        "beverages"
    ],
    "sku": "GRO-BRD-JUI-029",
    "weight": 1,
    "dimensions": {
        "width": 18.56,
        "height": 21.46,
        "depth": 28.02
    }
}
const products = [product1, product2, product3];

const filterProducts = products.filter((value) => {
    return value.id === 1 || value.id === 29;
});

console.log(filterProducts);

console.log("==================================");

/*find != gì so với filter trong ngữ cảnh nó cùng tìm kiếm cái gì đó thì
find nó sẽ return giá trị khi tìm thấy iteam đầu tiên thỏa mẫn điều kiện
còn filter nó sẽ lấy hết tất cả các iteam thỏa mãn điều kiện
*/
const filterProductv2 = products.filter((value) => {
    return value.category === "beauty";
});
console.log(filterProductv2);
console.log("==================================");
const findProducts = products.find((value) => {
    return value.category === "beauty";
})

console.log(findProducts);

// map map clone 1 array 
console.log("==================================");