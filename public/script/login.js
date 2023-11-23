const loginForm = document.querySelector('.formLogin');

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    const data = {
      password: password.value,
      email: email.value,
    };

    try {
      const res1 = await fetch('/api/login/router', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const respons = await res1.json();
      console.log(respons);

      if (respons.success) {
        window.location.href = '/categories';
      } else {
        document.querySelector('.errLogin').innerHTML = respons.message;
      }
    } catch (error) {
      console.log(error);
    }
  });
}
