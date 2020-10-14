const searchInput = document.querySelector('.search-input');
const clearInput = document.querySelector('#clear-input');

/* Wiring up the Darken/Lighten button */
searchInput.addEventListener('input', function (e) {
    if ((clearInput.className === "hidden") && (searchInput.value !== '')) {
        clearInput.className = 'visible';
    } else if ((clearInput.className === "visible") && (searchInput.value === '')) {
            clearInput.className = 'hidden';
    }
});

clearInput.addEventListener('click', function (e) {
    searchInput.value = '';
    clearInput.className = 'hidden';

});