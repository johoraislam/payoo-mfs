const btnform = document.getElementById('form-btn');

btnform.addEventListener('click',(e) =>{
    e.preventDefault();

    // get input filed
    const addAmount = document.getElementById('amount').value;

    // get pin number
    const pinNumber = document.getElementById('pass').value;
    console.log(addAmount,pinNumber)
})