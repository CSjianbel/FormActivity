const calculateAge = (bday) => { 
    const ageDifMs = Date.now() - bday.getTime();
    const ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const formVerification = () => {
    document.getElementById("successAlert").innerHTML = "";
    document.getElementById("invalidPass").innerHTML = "";
    document.getElementById("invalidAge").innerHTML = "";

    let error = false;

    // Verify password
    const minPassLength = 8;
    if (document.getElementById("password").value.length < minPassLength) {
        document.getElementById("invalidPass").innerHTML = `Password must be at least ${minPassLength} characters.`;
        error = true;
    }

    // Verify age
    const minAge = 22;
    const bday = new Date(document.getElementById("birthdate").value);
    if (bday == "Invalid Date") {
        document.getElementById("invalidAge").innerHTML = bday;
    } else if (calculateAge(bday) < minAge) {
        document.getElementById("invalidAge").innerHTML = "Minors are not allowed!";
        error = true;
    }

    // Check if any errors occured
    if (!error) {
        document.getElementById("successAlert").innerHTML = "Hooray! Your account has been successfully created.";
    }
}
