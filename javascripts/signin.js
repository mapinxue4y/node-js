const login = document.getElementById('signin');
const xhr = new XMLHttpRequest();

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

    fetch('/users/signin/sendId',{
        method:'POST',
        body:payload,
        headers:jsonHeader
    }).then((response)=>{
        console.log(response.text());
    });
});
