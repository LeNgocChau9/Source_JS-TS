
let name = ["John", "Doe"];
//for loop
for(let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//while loop
let anchor = 0;
while (anchor > 0) {
    anchor--;
    console.log(name[anchor]);
}
// do while loop

do{
    console.log(name[anchor])
    anchor ++    
}while(anchor <= name.length)
