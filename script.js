const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click',(e) => {
    e.preventDefault();

    const phoneNums = document.getElementById('phnums').value;
    const pinNums = document.getElementById('pinNums').value;
    console.log(phoneNums,pinNums)

    if(phoneNums === '6789' && pinNums === '12345'){
        console.log('you are logged')
        window.location.href ='./home.html'
    }
    else{alert('type correct pass')}
})