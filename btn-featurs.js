const showAddMoneyBtn = document.getElementById('addMoneyBtn');

const showCushOutBtn = document.getElementById('cushOutBtn');

showCushOutBtn.addEventListener('click', () => {
    const container = document.getElementById('cush-out-form-container');
    container.classList.remove('hidden')

    //hide add money form
    const containerform = document.getElementById('add-money-form-container');
    containerform.classList.add('hidden')

})


showAddMoneyBtn.addEventListener('click', () => {
    const addContainer = document.getElementById('add-money-form-container');
    addContainer.classList.remove('hidden')

    //hide add money form
     document.getElementById('cush-out-form-container').classList.add('hidden');
    

})