const addAnimal = document.getElementById('addAnimal');
const error = document.getElementById('errooor');
if (addAnimal) {
  addAnimal.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, description, categoryId } = event.target;
    const res = await fetch('/api/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        categoryId: categoryId.value,
      }),
    });
    const data = await res.json();
    if (data.html) {
      error.insertAdjacentHTML('beforeend', data.html);
    }else {
        error.innerHTML = data.message
    }
  });
}
