
function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }
    
    axios.post("https://crudcrud.com/api/41f91c3b1c2e494db8353cbfc5e27dd5/appointmentData",obj)
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
    const data=axios.get("https://crudcrud.com/api/41f91c3b1c2e494db8353cbfc5e27dd5/appointmentData")
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
    
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';
   

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(emailId, name, phonenumber){

    document.getElementById('email').value = emailId;
    document.getElementById('username').value = name;
    document.getElementById('phonenumber').value =phonenumber;

    deleteUser(emailId)
 }

// deleteUser('abc@gmail.com')

function deleteUser(emailId){
    console.log(emailId)
                localStorage.removeItem(emailId);
                removeUserFromScreen(emailId);
            }
            function removeUserFromScreen(emailId){
                const parentNode = document.getElementById('listOfUsers');
                const childNodeToBeDeleted = document.getElementById(emailId);

                
                if(childNodeToBeDeleted) {
                    parentNode.removeChild(childNodeToBeDeleted)
                }
            }