const btnform = document.getElementById('form-btn');


btnform.addEventListener('click',(e) =>{
    e.preventDefault();

    // get input filed
    const addAmount = document.getElementById('amount').value;

    // get pin number
    const pinNumber = document.getElementById('pass').value;
    
    // verifyed pin number

    if(pinNumber === '12345'){
        // alert('you are logged')
        // get corrent money
        const balance = document.getElementById('balance').innerText;
        console.log(balance)

        // add addAmount with corrent moeny

        const newBlance = Number(addAmount) + Number(balance)

        //display new balane in the ui
        
        document.getElementById('balance').innerText = newBlance;
    }
    else{alert('type correct pin number')}
})


