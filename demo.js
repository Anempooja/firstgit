var headerTitle=document.getElementById('header-title');
console.log(headerTitle.innerText);
//headerTitle.textContent="hello"
//headerTitle.innerText="good boy"
//var items= document.getElementsByClassName('list-group-item')
//console.log(items)
//console.log(items[1])
//for(let i=0;i<items.length;i++){
//    items[i].style.fontWeight='bold'
//}

//items[2].style.backgroundColor='yellow'
//var li=document.getElementsByTagName('li');
//li[1].textContent='Hello'
//li[2].style.fontWeight='bold'
//li[3].style.backgroundColor='#f3f3f3'
//li[0].style='color:blue'
//li[4].textContent='item5'
var x=document.querySelector('#main-header');
x.style.borderBottom='solid 5px yellow'
var input=document.querySelector('input[type="submit"]');
input.value="OK"
var items=document.querySelector('.list-group-item');
items.style.color='pink'
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.fontWeight='bold'
//secondItem.style.backgroundColor='green'
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color='transparent';
var odd= document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
