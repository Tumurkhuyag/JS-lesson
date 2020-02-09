function deleteListItem(id) {
  document
    .getElementById(id)
    .parentNode.removeChild(document.getElementById(id));
}
