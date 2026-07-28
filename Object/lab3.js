/*
Yêu cầu:
Hãy tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object
có các thuộc tính:

- name (tên sản phẩm)
- price (giá sản phẩm)
- inStock (true/false – còn hàng hay không)
Ví dụ:
{
name: "T-shirt",
price: 200,
inStock: true
}
1.in ra tên sản phẩm đầu tiên
2.thay đổi giá sản phẩm thứ 2 thành 150.000 và in ra tất cả sản phẩm
3.thêm 1 sản phẩm mới vào cuối mảng và in ra tất cả sản phẩm
4.xóa sản phẩm cuối cùng ra khỏi danh sách và in ra tất cả sản phẩm
5.dùng for each để in ra tất cả sản phẩm
6.dùng map() để tạo ra mảng mới chỉ chứa giá sản phẩm
7.dùng filter để lấy các sản phẩm còn hàng 
8.dùng for_in để duyệt qua từng phần tử mảng đầu tiên
*/

let sp1 = {
    name: "laptop",
    price: 5000000,
    inStock: true
};

let sp2 = {
    name: "phone",
    price: 700000,
    inStock: true
}

let sp3 = {
    name: "radio",
    price: 100000,
    inStock: false
}

let sp4 = {
    name: "headphone",
    price: 400000,
    inStock: true
}

let sp5 = {
    name: "fan",
    price: 38000,
    inStock: false
}

let products = [sp1, sp2, sp3, sp4, sp5];

//in ra tên sản phẩm 1
console.log(`sp1 name: ${sp1.name}`);

//thay đổi giá của sản phẩm thứ 2

const updatePrice = (nameSP,priceUpdate) => {
    nameSP.price = priceUpdate;
}

updatePrice(sp2,20000);

console.log(sp2);
console.log("=============")
console.log(products);

// thêm 1 sản phẩm vào cuối mảng và in ra tất cả sản phẩm 

products.push(sp6 = {
    name: "board",
    price: 300000,
    inStock: true
})
console.log("=================");

console.log(products)

// xóa sản phẩm cuối cùng ra khỏi mảng 

products.pop();

console.log("=============");

console.log(products);

// dùng for_each để in ra các phần tử của mảng
console.log("=========");

products.forEach((value,index)=>{
    console.log(`sp ${index}`);
    for(let key in value){
        console.log(key, ":",value[key]);
    }
    console.log("=========")
})

// dùng map để tạo ra mảng mới chỉ chứa giá sản phẩm
const productsV2 = [];
products.map((value, index)=>{
    productsV2.push(value.price);
})

console.log(productsV2);
// dùng phương thức filter để lấy các hàng còn trong kho
console.log("===============");

const checkStock = products.filter((value)=>{
    return value.inStock === true;
})

console.log(checkStock);
