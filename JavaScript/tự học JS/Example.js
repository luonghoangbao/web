
//Hàm này được gọi khi HTML tải xong
function SetupEventForDiv(){
    var obj = document.getElementById('div1');
    obj.onmouseout = F2;
    obj.onmouseover = F1;
}

//Hàm này được gọi khi rê chuột lên div1
function F1(){
    var obj = document.getElementById('div1');
    obj.innerHTML = (new Date()).getSeconds();
    obj.setAttribute('style','background-color:green');
}

function F2(){
    var obj = document.getElementById('div1');
    obj.innerHTML = (new Date()).getSeconds();
    obj.setAttribute('style','background-color:blue');
}

//Json
    // var str = '{"name":"Lương Hoàng Bảo","age":20}';
    // var obj = JSON.parse(str);
    // obj.name = "Hồ Thị Thu Thủy";
    // var str2 = JSON.stringify(obj);
    // alert(str2);
var str = '{"name":"Lương Hoàng Bảo","age":20,"more_info": [125, "ABC", {"id":"Đây là id"}]}';
var obj = JSON.parse(str);
alert(obj.more_info[2].id);