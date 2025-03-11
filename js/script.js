const visitas = document.getElementById('contadorVisitas');

if (localStorage.getItem('veces')) {
    localStorage.setItem('veces', Number(localStorage.getItem('veces')) + 1);
} else {
    localStorage.setItem('veces', 1);
}

visitas.innerHTML = localStorage.getItem('veces');

const btn = document.getElementById('btnReestablecer');
function borrar() {
    localStorage.removeItem('veces');
    visitas.innerHTML = 0;
}
btn.addEventListener('click', borrar);