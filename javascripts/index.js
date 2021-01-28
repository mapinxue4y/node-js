const login = document.getElementById('login');
const signin  =document.getElementById('signin');

signin.addEventListener('click',()=>{
    window.open('/users/signin');
});
login.addEventListener('click',()=>{
    window.open('/users/login');
});