
function saveToLocalStorage(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const description= event.target.description.value;
    const category = event.target.category.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        amount,
        description,
        category
    }
    
    axios.post("https://crudcrud.com/api/b769e6a10ff64831be1f78ba6ecf68f2/appointmentData",obj)
    .then((response)=>{
        showNewUserOnScreen(response)
        console.log(response )
    })
    .catch((err)=>{
        console.log(err)
    })
    //localStorage.setItem(obj.email, JSON.stringify(obj))
    //showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const data=axios.get("https://crudcrud.com/api/b769e6a10ff64831be1f78ba6ecf68f2/appointmentData")
    .then((response)=>{
        console.log(response)
        
        for(var i=0;i<response.length;i++){
            showNewUserOnScreen(response[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(data)
})

function showNewUserOnScreen(user){
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
   

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.amount} - ${user.description}
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUserDetails('${user._id}','${user.amount}','${user.description}','${user.category}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    
}

//Edit User

function editUserDetails(id,amount, description, category){

    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;

    deleteUser(id)
 }

// deleteUser('abc@gmail.com')

function deleteUser(Id){
    
                
           
                const parentNode = document.getElementById('listOfUsers');
                const childNodeToBeDeleted = document.getElementById(Id);

                
                if(childNodeToBeDeleted) {
                    axios.delete(`https://crudcrud.com/api/b769e6a10ff64831be1f78ba6ecf68f2/appointmentData/${Id}`)
                    .then(removeFromScreen(Id))
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            }
            function removeFromScreen(id){
                
                let parent = document.getElementById("listOfUsers");
                let toBeRemove = document.getElementById(id);
                
                parent.removeChild(toBeRemove);
            }