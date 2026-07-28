/* lab 2
input :
const gradeMath = 9;
const gradeEnglish =7;
const gradeIT = 8;
viết hàm tính điểm trung bình 
viết function tính xếp loại điểm trung bình
từ 9 -> "xuất xắc"
từ 8 và nhỏ hơn 9 -> "giỏi"
từ 6.5 và nhỏ hơn 8 -> "khá"
còn lại -> "trung bình"
*/
const gradeMath = 9;
const gradeEnglish =7;
const gradeIT = 8;

let avg = (gradeMath,gradeEnglish,gradeIT)=>{
    return (gradeMath + gradeEnglish + gradeIT)/3;
}

function rank(avg){
    if(avg >= 9){
        return "excellent";
    }
    else if(avg >=8 && avg < 9){
        return "good";
    }
    else if(avg >=6.5 && avg < 8){
        return "rather";
    }
    else{
        return "medium";
    }
}

console.log(avg(gradeMath,gradeEnglish,gradeIT));

console.log(rank(avg));

