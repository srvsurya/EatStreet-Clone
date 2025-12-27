// For the delivery and takeout buttons on the top section
const deliveryBtn=document.getElementById("deliveryBtn");
const takeoutBtn=document.getElementById("takeoutBtn");
const takeoutDropdown=document.getElementById("takeoutDropdown");
const addressForm=document.getElementById("addressForm");
//  for the deal section, email and name input fields
const dealEmail=document.getElementById("dealEmail");
const defaultEmailPlaceholder="Email Address";
const dealBtn=document.getElementById("dealBtn");
const dealName=document.getElementById("dealName");
const defaultNamePlaceholder="Name";
// functions and listeners for the takeout and delivery buttons
function setDelivery(){
    takeoutBtn.classList.remove("active");
    deliveryBtn.classList.add("active");

    addressForm.style.display='block';
    takeoutDropdown.style.display='none';


}
function setTakeout(){
    takeoutBtn.classList.add("active");
    deliveryBtn.classList.remove("active");

    addressForm.style.display='none';
    takeoutDropdown.style.display='block';
}

deliveryBtn.addEventListener("click",setDelivery);
takeoutBtn.addEventListener("click",setTakeout);
// functions and listeners for the deal section input fields
function showInputError(message){
    dealEmail.classList.add("input-error");
    dealEmail.value="";
    dealEmail.placeholder=message;
}
function showNameInputError(message){
    dealName.classList.add("input-error");
    dealName.value="";
    dealName.placeholder=message;

}
function clearInputError(){
    dealEmail.classList.remove("input-error");
    dealEmail.placeholder=defaultEmailPlaceholder;
}
function clearNameInputError(){
    dealName.classList.remove("input-error");
    dealName.placeholder=defaultNamePlaceholder;
}

dealEmail.addEventListener("input",clearInputError);
dealName.addEventListener("input",clearNameInputError);
function validateEmail(){
    const email=dealEmail.value;
    if(email===""){
        showInputError("No Email Address ");
        return;
    }
    if(!email.includes("@")){
        showInputError("Not a valid Email Address ");
        return;
    }
}
function validateName(){
    const nameof=dealName.value;
    if(nameof===""){
        showNameInputError("No Name given ")
    }
}

dealBtn.addEventListener("click",validateEmail);
dealBtn.addEventListener("click",validateName);
// for initial stage of toggle
setDelivery();

//page nav
const signBtn=document.getElementById("signBtn");
signBtn.addEventListener("click",()=> {
    window.location.href="sign-in.html";
}

);



