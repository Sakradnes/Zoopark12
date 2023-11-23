const addAnimal = document.getElementById('addAnimal');

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
    console.log(data);
  });
}
