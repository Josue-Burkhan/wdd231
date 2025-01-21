document.getElementById("last-modified").textContent = document.lastModified;

//Nav mobil
const navigation = document.querySelector('.menu');
const menuBut = document.querySelector('#menu');
const firstPag = document.querySelector('.first-part');

menuBut.addEventListener('click', () => {
    navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
    firstPag.style.marginTop = firstPag.style.marginTop === '150px' ? '0' : '150px';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();



const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".thirth-part");


display.classList.add("grid");


gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
    loadMembers();
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
    loadMembers();
});


async function loadMembers() {
    try {
        const response = await fetch('scripts/members.json')
        const members = await response.json();

        display.innerHTML = "";

        members.forEach((member, index) => {
            if (display.classList.contains("grid")) {
                const card = document.createElement("div");
                card.classList.add("member-card");

                card.innerHTML = `
                  <div class="card">
                    <div class="image-placeholder">
                      <h3>${member.name}</h3>
                      <p>${member.description || 'Business Tag Line'}</p>
                    </div>
                    <hr>
                    <div class="info">
                      <img src="${member.image}" alt="${member.name}" width= 80>
                      <div>                      
                        <p><strong>PHONE:</strong> ${member.phone}</p>
                        <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                      </div>

                    </div>
                  </div>
                `;
                display.appendChild(card);
            } else if (display.classList.contains("list")) {
                const row = document.createElement("div");
                row.classList.add("member-row");


                row.style.backgroundColor = index % 2 === 0 ? "#9c9c9c93" : "#ffffff93";

                row.innerHTML = `
                  <p><strong>${member.name}</strong></p>
                  <p>${member.address}</p>
                  <p>${member.phone}</p>
                  <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                `;
                display.appendChild(row);
            }
        });
    } catch (error) {
        console.error("Error al cargar los miembros:", error);
    }
}

loadMembers();
