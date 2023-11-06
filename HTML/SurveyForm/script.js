// Function to fetch the list of countries from the REST Countries API
function fetchCountries() {
    const countryDropdown = document.getElementById("country");
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement("option");
                option.value = country.name.common;
                option.text = country.name.common;
                countryDropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching countries:", error));
}

// Call the fetchCountries function to populate the country dropdown
fetchCountries();

// Function to submit the form with validation
function submitForm() {
  // Get references to the form fields
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var genderInputs = document.querySelectorAll('input[name="gender"]');
  var selectedGender = null;
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  // Check if all fields are filled out
  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    profession
  ) {
    // Check and store the selected gender
    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        if (selectedGender !== null) {
          alert("Please select only one gender.");
          return;
        }
        selectedGender = genderInputs[i].nextElementSibling.textContent;
      }
    }

    if (selectedGender === null) {
      alert("Please select a gender.");
      return;
    }

    // Validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate mobile number length
    if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      alert("Mobile number should be 10 digits long and contain only digits.");
      return;
    }

    // Create a popup with the selected values
    var popupContent =
      "First Name: " + firstName + "\n" +
      "Last Name: " + lastName + "\n" +
      "Date of Birth: " + dob + "\n" +
      "Country: " + country + "\n" +
      "Gender: " + selectedGender + "\n" +
      "Profession: " + profession + "\n" +
      "Email: " + email + "\n" +
      "Mobile Number: " + mobile;

    alert(popupContent);

    // Reset the form
    document.getElementById("myForm").reset();
  } else {
    alert("Please fill out all the required fields.");
  }
}

// Define a function to reset the form
function resetForm() {
  document.getElementById("myForm").reset();
}

