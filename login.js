//const { JSONCookie } = require("cookie-parser");

//const { response } = require("express");

const login = document.getElementById('login');
const xhr = new XMLHttpRequest();
const p =document.querySelector('p');

login.addEventListener('click',()=>{
    let id = document.getElementById('userId').value;
    let pass = document.getElementById('userPass').value;

    let payload = JSON.stringify({
        userId: id,
        userPass: pass
    });

    let jsonHeader = new Headers({
        'Content-Type':'application/json'
    });

    fetch('/users/login/sendId',{
        method:'POST',
        body:payload,
        headers:jsonHeader
    }).then((response)=>{
            response.text().then(res=>{
            console.log(res)
            if(res==0)
                {p.innerHTML='未注册或密码错误';console.log("未注册");}
            else {
                p.innerHTML = '登录成功';}
            });
        
    });
});
