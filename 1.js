var cookie = "PHPSESSID=g98l93ja145oo9ca4va5da75p2; path=/,doudouwan_visitor_auth=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/,doudouwan_visitor_user=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/"// http.get('http://doudouwan.com/').headers['Set-Cookie'].join(",")

//log(cookie);




// var temp = http.get('http://doudouwan.com/register/register_ver_code.html?rand=5', {
//     "headers": {
//         "Cookie": cookie
//     }
// }).body.bytes();

// let img = images.fromBytes(temp);
// console.log(images.toBase64(img))
// img.recycle();


var temp = http.get('http://doudouwan.com/login/sign_in.html?username=duoerku&password=duoerku99&ver_code=6267', {
    "headers": {
        "Cookie": cookie
    }
}).body.json();

log(temp);
//console.log("登录：", 登录())
//console.log("刷新页面：", 刷新页面())




// console.log("验证码：", GetCode())
// function 刷新页面() {
//     let url = "http://doudouwan.com/login/index.html?returl_url=/member/index.html"
//     let res = http.get(url);
//     console.log("请求头：", res.headers["Set-Cookie"])
//     let data = res.body.string();
//     return data
// }



// function GetCode() {
//     let url = "http://doudouwan.com/register/register_ver_code.html?rand=8"
//     let res = http.get(url);
//     console.log(res)
//     let data = res.body.bytes();
//     let imag = images.fromBytes(data)
//     return images.toBase64(imag)
// }

// function 登录() {
//     let url = "http://doudouwan.com/login/sign_in.html?username=duoerku&password=duoerku99&ver_code=9111"
//     let res = http.get(url);
//     return res.body.json()
// }

