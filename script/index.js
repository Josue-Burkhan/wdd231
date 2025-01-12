document.getElementById("last-modified").textContent = document.lastModified;

//Nav mobil
const navigation = document.querySelector('.menu');
const menuBut = document.querySelector('#menu');
const firstPag = document.querySelector('.first-pag');

menuBut.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
  firstPag.style.marginTop = firstPag.style.marginTop === '40px' ? '0' : '40px';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();