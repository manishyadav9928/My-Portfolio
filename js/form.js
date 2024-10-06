



document.querySelector('form').addEventListener('submit', function (e) {
  // Prevent form submission
  e.preventDefault();

  // Get the form and form fields
  const form = e.target;
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const phone = document.querySelector('input[name="phone"]');
  const message = document.querySelector('textarea[name="message"]');
  let valid = true;

  // Clear previous error messages
  document.querySelectorAll('.error').forEach((el) => el.remove());

  // Helper function to show error message
  function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerText = message;
    input.parentElement.appendChild(error);
  }

  // Name validation
  if (name.value.trim() === '') {
    showError(name, 'Username is required.');
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    showError(email, 'Please enter a valid email.');
    valid = false;
  }

  // Phone validation (assuming a 10-digit phone number)
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone.value)) {
    showError(phone, 'Please enter a valid phone number (10 digits).');
    valid = false;
  }

  // Message validation
  if (message.value.trim() === '') {
    showError(message, 'Message cannot be empty.');
    valid = false;
  }

  // If all fields are empty, alert failure message
  if (
    name.value.trim() === '' &&
    email.value.trim() === '' &&
    phone.value.trim() === '' &&
    message.value.trim() === ''
  ) {
    alert('Form submission failed!');
  } else if (valid) {
    // If form is valid, submit the data
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          form.reset();
          alert('Form submitted successfully!');
        } else {
          alert('Form submission failed!');
        }
      })
      .catch((error) => {
        alert('There was an error submitting the form.');
      });
  }
});








  // Function to display error messages
  function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.textContent = message;
    input.parentNode.appendChild(error);
  }







  const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })

    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 1000);
    });
});
