function gantiWarna() {
  document.body.style.backgroundColor = 'grey';
}

function kirimData(event) {
  event.preventDefault(); // biar halaman tidak refresh
  let input = document.getElementById('inputNama').value;
  document.getElementById('hasil').innerText = input;
}
