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
// hàm filter 
const age = [19,2,21,23,25,6,3];
// tìm 1 những người có số tuổi trên 18 tuổi
/*
    cơ chế hoạt động của hàm filter là kiểu hỏi cái này cần không thì giữ lại
    ví dụ array = [chuối, cam , táo]
    sẽ sẽ duyệt qua từng cái xong hỏi nếu điều kiện return là true thì giữ false thì loại bỏ
    nó clone ra mảng mới không thay đổi mảng cũ trước đó
*/
console.log(age);

const agev2 = age.filter((value) => value >18);
// cơ chế nó là duyệt tuyến tín hết tất cả phần tử của mảng
/*
    ý tưởng  viết truyền thống của nó là
    const ageclone = [];
    for(int i = 0; i < age.length(), i++){
        if(age[i]>18) ageclone.push(age[i]);
    } 

*/
// cách code ngắn gọn khi không có gì trong thân arrow function 

console.log(agev2);