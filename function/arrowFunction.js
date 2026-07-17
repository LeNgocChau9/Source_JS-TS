
//ex sum a+b

(a,b) => {
    return a+b;
}
// => này à ví dụ của 1 arrow function

(6,7);// điều này không thể thực thi khi vì nó là 1 function ẩn danh

//muốn nó không có tên nhưng vẫn chạy được 

(function (a,b){
    console.log(a+b)
})(6,7);

// phong cách viết này cho arrow fuction 

((a,b)=>{
    console.log(a+b);
})(7,8);

//phong cách viết arrow fuction đặt tên 

const sum = (a,b) =>{
    return a+b;
}

console.log(sum(10,20));
