document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/ingredientes')
        .then(response => response.json())
        .then(data => {
            const ingredientesList = document.getElementById('ingredientes');
            data.forEach(ingrediente => {
                const li = document.createElement('li');
                li.textContent = ingrediente.name;
                ingredientesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
});