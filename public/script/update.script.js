const updateForm = document.querySelector('.js-update-form');

if (updateForm) {
  updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, description, url } = event.target;

    const { id } = updateForm.dataset;

    const response = await fetch(`/api/animals/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        url: url.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      window.location.assign('/');
    } else {
      const data = await response.json();
      return data.error;
    }
  });
}
