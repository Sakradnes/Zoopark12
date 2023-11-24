const delAnimal = document.querySelector('.delAnimal');
if (delAnimal) {
  delAnimal.addEventListener('click', async (event) => {
    const deleteBtn = event.target;
    deleteBtn.closest('.animalCard');
    const { id } = event.target.dataset;
    try {
      const response = await fetch(`/api/animals/${id}`, {
        method: 'DELETE',
      });
      const serverAnswer = await response.json();
      if (serverAnswer.success) {
        window.location.href = '/categories';
      } else {
        const data = await response.json();
        console.log(data.massage);
      }
    } catch (error) {
      console.log(error.massage);
    }
  });
}
