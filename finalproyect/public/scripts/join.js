//Nav mobil
const navigation = document.querySelector('.menu');
const menuBut = document.querySelector('#menu');
const firstPag = document.querySelector('#main');

menuBut.addEventListener('click', () => {
    navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
    firstPag.style.marginTop = firstPag.style.marginTop === '220px' ? '140px' : '220px';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();



// Thank You Page Script
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    
    document.getElementById("first-name").textContent = urlParams.get("first-name");
    document.getElementById("last-name").textContent = urlParams.get("last-name");
    document.getElementById("email").textContent = urlParams.get("email");
    document.getElementById("phone").textContent = urlParams.get("phone");
    document.getElementById("pen-name").textContent = urlParams.get("pen-name");
    document.getElementById("writing-level").value = urlParams.get("writing-level");
    document.getElementById("writing-genre").value = urlParams.get("writing-genre");
    document.getElementById("bio").textContent = urlParams.get("bio");
    document.getElementById("social-media").textContent = urlParams.get("social-media");
    document.getElementById("motivation").textContent = urlParams.get("motivation");

    document.getElementById("currentyear").textContent = new Date().getFullYear();
});
