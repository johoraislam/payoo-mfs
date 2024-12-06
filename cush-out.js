const cushOut = document.getElementById('cushOut-btn');

cushOut.addEventListener('click',(e) =>{
    e.preventDefault();

    // get input filed
    const addAmount = document.getElementById('cush-out').value;

    // get pin number
    const cushOutPinNumber = document.getElementById('cush-out-pin').value;
    
    // verifyed pin number

    if(cushOutPinNumber === '12345'){
        // alert('you are logged')
        // get corrent money
        const balance = document.getElementById('balance').innerText;
        // console.log(balance)

        // add addAmount with corrent moeny

        const newBlance = Number(balance) - Number(addAmount)

        //display new balane in the ui
        
        document.getElementById('balance').innerText = newBlance;
    }
    else{alert('type correct pin number')}
})