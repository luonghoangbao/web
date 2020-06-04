// Dùng ID để lấy đối tượng thao tác
// var obj = document.getElementById("div1");

//  obj.setAttribute('class','NewCss');

// obj.style.backgroundColor ="yellow";

function BatDauTinh(){
    var objA = document.getElementById('txtA');
    var aStr = objA.value;
    var a = parseInt(aStr);

    var objB = document.getElementById('txtB');
    var bStr = objB.value;
    var b = parseInt(bStr);

    var objC = document.getElementById('txtC');
    var cStr = objC.value;
    var c = parseInt(cStr);

    // var a = parseInt(document.getElementById('textA').value);
    // var b = parseInt(document.getElementById('textB').value);
    // var c = parseInt(document.getElementById('textC').value);

    alert(a);
    alert(b);
    alert(c);
}

// function ChiaAB(a,b){
//     if(b ==0){
//         throw "Không thể có phép chia cho 0";
//     }
//     var t = a/b;
//     return t;
// }

// try{
//     var kq = ChiaAB(15,0);
//     alert("Kết quả: " +kq);
// }
// catch(e){
//     alert("Lỗi: " + e);
// }
