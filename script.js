var plus_num_1
var plus_num_2
var number
var result
var ngay
var thang
var nam

const pi = 3.14

function getvalue() {
    plus_num_1 = parseInt(document.getElementById("num1").value);
    plus_num_2 = parseInt(document.getElementById("num2").value);
}

function plus() {
    getvalue();
    result = plus_num_1 + plus_num_2;
    document.getElementById("result").innerHTML = "tong hai so la" + result;
}

function tinh_dien_tich() {
    number = parseInt(document.getElementById("bankinh").value)
    result = number * number * pi
    result = result.toFixed(2)
    document.getElementById("result").innerHTML = "diện tích hình tròn là: " + result
}

function tinh_chu_vi() {
    number = parseInt(document.getElementById("bankinh").value)
    result = number * 2 * pi
    result = result.toFixed(2)
    document.getElementById("result").innerHTML = "chu vi hình tròn là: " + result
}

function ngay_thang_nam() {
    ngay = document.getElementById("ngay").value
    thang = document.getElementById("thang").value
    nam = document.getElementById("nam").value
    var ngay_thang_nam = [ngay, thang, nam]
    result = ngay_thang_nam.join("-")
    document.getElementById("result").innerHTML = "ngày tháng năm mà bạn vừa điền là: " + result
}