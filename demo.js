var form = document.getElementById('my-form');



form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  var newName = document.getElementById('name');
  var newEmail = document.getElementById('email');
 

  localStorage.setItem('Name',newName.value);
  localStorage.setItem('Email',newEmail.value);
  console.log(localStorage.getItem('Name'));
  console.log(localStorage.getItem('Email'));
}

