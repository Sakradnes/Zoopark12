const loginForm = document.querySelector('.loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email, password } = event.target;
  });
}
