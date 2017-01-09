function validateFirstName(){
  var fName = document.getElementById("firstName").value;
  var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (re1.test(fName)){
    document.getElementById("firstNamePrompt").style.color = "Green";
    document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
    return true;
  }else {
    document.getElementById("firstNamePrompt").style.color = "Red";
    document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2  to 15 letters or numbers </strong>";
    return false;
  }
}

function validateLastName(){
  var lName = document.getElementById("lastName").value;
  var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;

  if (re2.test(lName)){
    document.getElementById("lastNamePrompt").style.color = "Green";
    document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
    return true;
  }else {
    document.getElementById("lastNamePrompt").style.color = "Red";
    document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2  to 15 letters or numbers </strong>";
    return false;
  }
}

function validatePhone(){
    var phoneNumber = document.getElementById("phone").value;
    var re3 = /^\d{3}-\d{3}-\d{4}$/;

    if (re3.test(phoneNumber)){
      document.getElementById("phonePrompt").style.color = "Green";
      document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
      return (true);
    }else{
      document.getElementById("phonePrompt").style.color = "Red";
      document.getElementById("phonePrompt").innerHTML = "<strong>Use xxx-xxx-xxxx format</strong>";
      return (false);
    }
}

function calcOrder(){

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var userName = firstName + " " + lastName;
  var phone = document.getElementById("phone").value;
  var quantity = document.getElementById("quantity").value;
  var price = document.getElementById("price").value;

  document.getElementById("orderConfirm").innerHTML = "<h2>Order Summary:</h2>";
  document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toUpperCase() + "</br>" + phone + "</p>";
  document.getElementById("orderConfirm").innerHTML += "<p>Order Total: $" + price * quantity + "</p>";

}
