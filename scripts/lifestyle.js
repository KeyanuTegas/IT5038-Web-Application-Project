var x = document.getElementById("form-submit");
function thankYou() {
    alert("Thanks for visiting!")
}
function formValidate() {
    let x = document.getElementById("form-phone").value
    if (isNaN(x)) {
        console.log("Not a number")
    } else {
        console.log("This is not a valid phone number")
    }
}