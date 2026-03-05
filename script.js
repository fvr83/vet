const btn = document.getElementById('btnConsulta');
const dropdown = document.getElementById('dropdownConsulta');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    dropdown.classList.add('active');
});

// Opcional: clicar fora fecha o dropdown
document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-container')) {
        dropdown.classList.remove('active');
        btn.style.display = 'block';
    }
});
