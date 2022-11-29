x=document.getElementById('h1');

x.style.fontSize='100px'
x.style.backgroundColor='yellow'
y=document.getElementById('header-title');
y.style.backgroundColor='#f4f4f4'
y.style.fontSize='50px'
z=document.getElementById('header')
z.style.backgroundColor='pink'
z.style.fontSize='50px'
b=document.getElementById('button');
b.style.Color='pink'
b.style.backgroundColor='#f4f4f4'
var i=document.getElementById('input').value;

console.log(i)
//this is another file
var form = document.getElementById('my-form');
var itemList = document.getElementById('users');

var x=document.getElementById('li');

form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
x.addEventListener('click',editItem);

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
    function editItem(e){
     document.getElementById('item')=itemList.Name
     document.getElementById('item')=itemList.Email
    }
