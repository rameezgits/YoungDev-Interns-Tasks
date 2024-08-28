// JavaScript to toggle between Sign In and Forgot Password forms
document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
});

document.getElementById('backToSignInLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
});