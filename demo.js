var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='orange';
itemList.lastElementChild.style.backgroundColor='#f4f4f4';
console.log(itemList.lastChild);
itemList.firstElementChild.style.backgroundColor='yellow';
console.log(itemList.firstChild);
itemList.firstElementChild.style.backgroundColor='pink';
itemList.firstElementChild.textContent='Hello'
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
itemList.previousElementSibling.style.backgroundColor='#f4f4f4'
var newDiv= document.createElement('div');
newDiv.className='hello'
newDiv.id='hello1'
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='50px';
container.insertBefore(newDiv,h1);
itemList.firstElementChild.appendChild(newDiv)


