function toggleContent(id) {
    const content = document.getElementById(id);
    if (content) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0];
    const formattedTime = now.toTimeString().split(' ')[0];
    
    document.getElementById('timestamp').value = `${formattedDate} | ${formattedTime}`;

    const navigation = document.querySelector('.menu');
    const menuBut = document.querySelector('#menu');
    const firstPag = document.querySelector('.first-part');

    if (menuBut && navigation && firstPag) {
        menuBut.addEventListener('click', () => {
            navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
            firstPag.style.marginTop = firstPag.style.marginTop === '150px' ? '0' : '150px';
        });
    }

    document.getElementById('currentyear').textContent = new Date().getFullYear();
});



//thankyou part

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("first-name").textContent = urlParams.get("first-name");
    document.getElementById("last-name").textContent = urlParams.get("last-name");
    document.getElementById("email").textContent = urlParams.get("email");
    document.getElementById("phone").textContent = urlParams.get("phone");
    document.getElementById("organization-name").textContent = urlParams.get("organization-name");
    document.getElementById("timestamp").textContent = urlParams.get("timestamp");
    document.getElementById("currentyear").textContent = new Date().getFullYear();
});