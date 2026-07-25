const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const login = document.getElementById("submit");
const formInput = document.getElementsByClassName("formInput")
const user1 = {
    user: "Chau15072000@gmail.com",
    pass: "123456"
}
console.log(userName);
login.addEventListener("click", () => {
    const userValue = userName.value;
    const passValue = passWord.value;
    if (userValue === user1.user && passValue === user1.pass) {
        alert("Đăng nhập thành công");
    } else {
        alert("Đăng nhập thất bại");
    }
})