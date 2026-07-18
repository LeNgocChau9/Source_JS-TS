//thao tác với mảng thêm sửa xóa

const name = ["Chau", "Hung", "Nam", "Phu"];

// lấy phần tử bẩt kỳ ra khỏi mảng 
console.log(name[2]);
console.log(name[0]);

//hàm thêm phần tử cuối mảng 
name.push("Cam");
//hàm thêm phần tử đầu mảng
name.unshift("null");
//hàm xóa phần tử cuối cùng của mảng
name.pop();
//hàm xóa phần tử đầu mảng 
name.shift();

// for each duyệt array truyền vào 1 callbackfn 
// dùng để đọc data 
name.forEach((value, index)=>{
    console.log(`index : ${index}, value = ${value}`);
})

console.log(name);

const score = [10,9,8,7];
//thay đổi value trong array kiểu clone array mới không liên quan array cũ
score.map((element,index)=>{
    return element*2;
})

console.log(score);

const scorev2 = score.map((element,index)=>{
    return element*2;
})
//hàm map này không thay đổi mảng bạn đầu 
console.log(scorev2);
/*
    cách code rút gọn arrow function khi thân hàm chỉ có lệnh return
    const scorev2 = score.map((element,index) => element*2)
*/