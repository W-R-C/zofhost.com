// Detect click on any div except on nav or .login_signup
document.addEventListener('click', function(event) {
  // Check if the clicked element is a div and is not inside a nav or a div with class "login_signup"
  if (event.target.tagName.toLowerCase() === 'div' && 
      !event.target.closest('nav') && 
      !event.target.closest('.login_signup')) {
    
    // Find the login-wrapper div and add the "hidden" class
    const loginWrapper = document.getElementById('login-wrapper');

    if (loginWrapper) {
      loginWrapper.classList.add('hidden');
    }
    
    // Restore scrolling when forms are hidden
    document.body.style.overflow = 'auto'; // Allow scrolling
  }
});

// Detect click on any element with class "login-link"
const loginLinks = document.querySelectorAll('.login-link');
loginLinks.forEach(function(loginLink) {
  loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (scroll to top)

    const loginWrapper = document.getElementById('login-wrapper');
    const signupBackground = document.getElementById('signup-background');
    const loginBackground = document.getElementById('login-background');

    if (loginWrapper && signupBackground && loginBackground) {
      // Show login-wrapper, hide signup-background, and show login-background
      loginWrapper.classList.remove('hidden');
      signupBackground.classList.add('hidden');
      loginBackground.classList.remove('hidden');
      
      // Disable scrolling when the login form is shown
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }
  });
});

// Detect click on any element with class "sign-up-link"
const signUpLinks = document.querySelectorAll('.sign-up-link');
signUpLinks.forEach(function(signUpLink) {
  signUpLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (scroll to top)

    const loginBackground = document.getElementById('login-background');
    const signupBackground = document.getElementById('signup-background');

    if (loginBackground && signupBackground) {
      // Hide login-background and show signup-background
      loginBackground.classList.add('hidden');
      signupBackground.classList.remove('hidden');
      
      // Disable scrolling when the signup form is shown
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }
  });
});

