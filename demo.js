var form = document.getElementById('my-form');



form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  let myObj={
    newName : document.getElementById('name').value,
    newEmail : document.getElementById('email').value
  };
let obj=JSON.stringify(myObj);

 

  localStorage.setItem('myObj',obj);
  
  
}

