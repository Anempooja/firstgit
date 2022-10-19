var form = document.getElementById('my-form');



form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  let myObj={
    Name : document.getElementById('name').value,
    Email : document.getElementById('email').value
  };


 

  localStorage.setItem(myObj.Email,myObj.Name+' '+myObj.Email);
  
  var x=document.getElementById('users')
  x.appendChild(document.createTextNode(myObj.Name+'  '+myObj.Email))
  
}

