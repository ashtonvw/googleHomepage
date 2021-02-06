const searchContainer = document.getElementById('searchInputContainer');

document.getElementById('searchInput').addEventListener('focus', addShadow);
document.getElementById('searchInput').addEventListener('blur', removeShadow);

function addShadow() {
  searchContainer.classList.add('searchBoxShadow');
}

function removeShadow() {
  searchContainer.classList.remove('searchBoxShadow');
}
