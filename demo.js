var headerTitle=document.getElementById('header-title');
console.log(headerTitle.innerText);
//headerTitle.textContent="hello"
//headerTitle.innerText="good boy"
var items= document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}

items[2].style.backgroundColor='yellow'