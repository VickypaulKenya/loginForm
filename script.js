
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('signupForm').classList.add('hidden');
});

document.getElementById('showSignup').addEventListener('click', function() {
    document.getElementById('signupForm').classList.toggle('hidden');
    document.getElementById('loginForm').classList.add('hidden');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    console.log('Login attempt:', { username, password });
    alert('Login attempted!');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    console.log('Signup attempt:', { username, email, password });
    alert('Signup attempted!');
});
