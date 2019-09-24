const description = document.querySelector('.add__description');
const values =document.querySelector('.add__value');
const addButton = document.querySelector('.add__btn');
const budget =document.querySelector('.budget__value');
const income_text = document.querySelector('.budget__income--value');
const expense_text = document.querySelector('.budget__expenses--value');
const addOrMinus = document.querySelector('.add__type');
const income_list = document.querySelector('.income__list');
const expenses__list = document.querySelector('.expenses__list');
const percentage_sym = document.querySelector('.budget__expenses--percentage');
const budget_month = document.querySelector('.budget__title--month');
const today = new Date();
let total_income = 0,total_expense = 0,month;

loadFunction();

function loadFunction(){
    percentage_sym.textContent = '---'
    budget.textContent = '0.00';
    income_text.textContent = '+0.00';
    expense_text.textContent = '-0.00';
    // capture add button event
    addButton.addEventListener('click',addHelper);
    income_list.addEventListener('click',remove_in_income);
    expenses__list.addEventListener('click',remove_in_expense);
    // change the month
    switch (today.getMonth()) {
        case 0:
            month ="January";
            break;
        case 1:
            month ="February";
            break;
        case 2:
            month ="March";
            break;
        case 3:
            month ="April";
            break;
        case 4:
            month ="May";
            break;
        case 5:
            month ="June";
            break;
        case 6:
            month ="July";
            break;
        case 7:
            month ="August";
            break;
        case 8:
            month ="September";
            break;
        case 9:
            month ="October";
            break;
        case 10:
            month ="novermber";
            break;
        case 111:
            month ="December";
            break;
    }
    budget_month.textContent = month +" "+2019;


}
function remove_in_expense(e){
    let target = e.target;
    console.log(target);
    if (target.classList.contains('ion-ios-close-outline')){
        target.parentElement.parentElement.parentElement.parentElement.remove();
    }

}
function remove_in_income(e){

    let target = e.target;
    if (target.classList.contains('ion-ios-close-outline')){
        target.parentElement.parentElement.parentElement.parentElement.remove();
    }
}


function addHelper(e) {
    if (description.value === '' || values.value === '' ) {
        alert('Input can not be empty');
    }
    // if we add income
    const div =document.createElement('div');
    div.className = "item clearfix";

    const sec_div = document.createElement('div');
    sec_div.className ='item__description';
    sec_div.textContent = description.value;
    div.appendChild(sec_div);

    const third_div = document.createElement('div');
    third_div.className = 'right clearfix';
    const item_value =document.createElement('div');
    item_value.className = 'item__value';
    item_value.textContent ='+'+values.value;
    third_div.appendChild(item_value);
    const fourth_div = document.createElement('div');
    fourth_div.className ='item__delete';
    const delete_button = document.createElement('button');
    delete_button.className = 'item__delete--btn';
    delete_button.innerHTML ='<i class="ion-ios-close-outline"></i>';
    fourth_div.appendChild(delete_button);
    third_div.appendChild(fourth_div);
    div.appendChild(third_div);
    if (addOrMinus.value === 'inc'){
        income_list.appendChild(div);
        total_income += parseFloat(values.value);
        income_text.textContent = '+'+total_income;
        change_budget();


    }else {
        expenses__list.appendChild(div);
        total_expense += parseFloat(values.value);
        expense_text.textContent = '-'+total_expense;
        change_budget();

    }
}

function change_budget (){
    let output = total_income - total_expense;
    let percentage_num = (total_expense/total_income) *100;
    if ( output > 0){
        budget.textContent = '+'+output.toFixed(2);
    } else {
        budget.textContent = output.toFixed(2);
        percentage_sym.textContent = percentage_num.toFixed(0)+"%";
    }
}
