// const submitS = document.getElementById('smt');
// submitS.addEventListener("keydown", (event) =>{
//     if(event.key === "enter"){
//    return submitS.event();
//     }
// }) 
const inputS = document.getElementById("inputField")
const formS = document.getElementsByClassName('form')[0];
const submitS = document.getElementById('smt');


submitS.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action (if any)
        submitS.closest('formS').submit(); // Find the closest form and submit it
    }
});