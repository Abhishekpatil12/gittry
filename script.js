
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value;

  // Perform validation or authentication logic here
  // For demonstration, you can log the values to the console
  console.log('Email:', email);
  console.log('Password:', password);
});

