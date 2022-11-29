function savetoLocalstorage(e){
    e.preventDefault()
    amount=e.target.amount.value;
    description=e.target.description.value;
    category=e.target.category.value;
    const obj ={
        amount,
        description,
        category
    }
    localStorage.setItem(obj.description,JSON.stringify(obj))    
    createelement(e)
}
function createelement(e){
    amount=e.target.amount.value;
    description=e.target.description.value;
    category=e.target.category.value;

    const parentNode = document.getElementById('detailClass');
    const childHTML = `<li id=${description}>${amount}- ${description} - ${category}
    <button onclick=deleteExpense('${description}')> Delete  </button>
    <button onclick=editExpense('${amount}','${description}','${category}')>Edit </button>
 </li>`;

 parentNode.innerHTML = parentNode.innerHTML + childHTML
 amount=" "
 description=" "
 category=" ";
}
function deleteExpense(description){
    localStorage.removeItem(description)
    removeExpense(description)
}
function removeExpense(description){
    const ul=document.getElementById('detailClass')
    const li=document.getElementById(description)

        ul.removeChild(li)

}
function editExpense(amount,description,category){
    document.getElementById('amount').value=amount
    document.getElementById('category').value=category
    document.getElementById('description').value=description
    removeExpense(description)
}