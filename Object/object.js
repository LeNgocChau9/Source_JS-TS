const person1 = {
    name:"Le Ngoc Chau",
    age:25,
    address:"VietNam"
}
//muốn lấy data trong object

console.log(person1);
console.log(`age person1 : ${person1.age}`);

// sửa data trong object thì chỉ cần gán lại value là được
// xóa thuộc tính thuộc tính delete <object.thuộc tính>

delete person1.age;

console.log(person1)
