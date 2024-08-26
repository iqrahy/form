const userDetails = document.getElementById('user-details');

let userForm = document.getElementById('userForm');

userForm.style.backgroundColor = "purple";
userForm.style.fontSize = "20px";
userForm.style.color = "#fefefe";
userForm.style.padding = "30px";

userForm.addEventListener('submit', function(e){

    e.preventDefault();
    const userFullName = document.getElementById('fullName').value;
    const userEmail = document.getElementById('email').value;
    const userAge = document.getElementById('age').value;
    const forMale = document.getElementById('forMale').value;
    const forFemale = document.getElementById('forFemale').value;
    const forReading = document.getElementById('reading').value;
    const forTraveling = document.getElementById('traveling').value;

    userDetails.innerHTML = `${userFullName} </br> ${userEmail} </br> ${userAge} </br> ${forMale} </br> ${forFemale} </br> ${forReading} </br> ${forTraveling}`;


})