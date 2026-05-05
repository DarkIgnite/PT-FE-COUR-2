// fungsi untuk mengganti warna latar belakang
function gantiWarna() {
  document.body.style.backgroundColor = 'grey';
}

// fungsi untuk menampilkan pesan
function kirimData(event) {
  event.preventDefault();
  let input = document.getElementById('inputNama').value;
  document.getElementById('hasil').innerText = input;
}
