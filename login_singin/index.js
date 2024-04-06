const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SingInLink');
const RegisterLink=document.querySelector('.SingUpLink');
RegisterLink.addEventListener('click',()=>{
    container.classList.add('active');
})
LoginLink.addEventListener('click',()=>{
    container.classList.remove('active');
})