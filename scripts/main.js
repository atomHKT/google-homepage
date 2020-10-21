const searchInput = document.querySelector('.search-input');
const clearInput = document.querySelector('#clear-input');

/* Wiring up the Darken/Lighten button */
searchInput.addEventListener('input', function (e) {
    if (searchInput.value !== '') {
        clearInput.style.visibility = 'visible';
        clearInput.style.cursor = 'pointer';

    } else if (searchInput.value === '') {
        clearInput.style.visibility = 'hidden';
    }
});

clearInput.addEventListener('click', function (e) {
    searchInput.value = '';
    clearInput.style.visibility = 'hidden';
});