var form = document.getElementById('my-form');
var itemList = document.getElementById('users');



form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);


function addItem(e){
  e.preventDefault();
  let myObj={
    Name : document.getElementById('name').value,
    Email : document.getElementById('email').value
  };


 
  if(myObj.Email!==null){
  delete(localStorage.getItem(myObj.Email))
  }

  localStorage.setItem(myObj.Email,myObj.Name+' '+myObj.Email);
  
  var li = document.createElement('li');
  li.className = 'item';
  li.appendChild(document.createTextNode(myObj.Name+' '+myObj.Email));
  var editBtn=document.createElement('button')
  editBtn.appendChild(document.createTextNode('Edit'));
  editBtn.className = ' btn-danger btn-sm float-right edit';
  li.appendChild(editBtn);
  itemList.appendChild(li)
  var deleteBtn = document.createElement('button');
  deleteBtn.className = ' btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  

}
function removeItem(e){
  
  if(e.target.classList.contains('delete')){
   {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

    }
