const sv1 ={
    name:"Le Ngoc Chau",
    age:20,
    score:9
}

const sv2 = {
    name:"Nguyen Van A",
    age:19,
    score:7
}

const sv3 = {
    name:"Phung Van B",
    age:20,
    score:8
}

const sinhVien = [sv1, sv2, sv3]; // lưu sinh viên dô mảnh 

// làm thế nào để lấy họ tên sinh viên ra mà chỉ cần thuộc tính họ tên thôi ?

sinhVien.forEach((name,index)=>{
    console.log(`stt: ${index},`," name: ",name);
})



