const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');
const modalContent = document.getElementById('modalContent');
const modalImage = document.getElementById('modalImage');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function cekIPK() {
  const nama = document.getElementById('nama').value;
  const jurusan = document.getElementById('jurusan').value;
  const inputValue = parseFloat(document.getElementById('ipk').value);
  
  modal.style.display = 'block';

  modalContent.innerHTML = `
    <p>Nama: ${nama}</p>
    <p>Jurusan: ${jurusan}</p> 
  `;

  if (!isNaN(inputValue)) {
    modalContent.innerHTML += `IPK Anda: ${inputValue.toFixed(2)}`;

    if (inputValue >= 3.5) {
      modalContent.innerHTML += '<br><p><strong>Kriteria terpenuhi untuk beasiswa!</strong></p>';
      modalImage.src = 'star-trophy.png';
      
    } else {
      modalContent.innerHTML += '<br><p><strong>Kriteria belum terpenuhi. Tetap semangat!</strong></p>';
      modalImage.src = 'buddy-13.gif';
      
    }
  } else {
    modalContent.innerHTML = 'Mohon masukkan IPK yang valid.';
    modalImage.src = '404-not-found.png';
    
  }
}
