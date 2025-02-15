window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    document.querySelector('#hero').style.backgroundPosition = `center calc(50% + ${scrollPosition * 0.5}px)`;
});

document.addEventListener("DOMContentLoaded", function () {

    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.add('fade-in');
    }, 200);


    const observerOptions = { threshold: 0.3 };

    const animateOnScroll = (elements) => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);
        elements.forEach(el => observer.observe(el));
    };

    const benefitItems = document.querySelectorAll('.benefit-item');
    animateOnScroll(benefitItems);

    const communityCards = document.querySelectorAll('.community-card');
    animateOnScroll(communityCards);
});

const benefitsList = document.querySelector('.benefits-list');

benefitsList.addEventListener('mouseover', () => {
    benefitsList.style.animationPlayState = 'paused';
});

benefitsList.addEventListener('mouseout', () => {
    benefitsList.style.animationPlayState = 'running';
});



//call json
fetch('scripts/ourteam.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('community-no-blur');
        const teamGrid = document.querySelector('.team-grid');

        if (!teamGrid) {
            console.error("Div with class 'team-grid' not found");
            return;
        }

        data.wild_fantasy_team.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('community-card');

            card.innerHTML = `
        <div class="card-content">
          <h3>${member.role}: ${member.name}</h3>
          <p>${member.description}</p>
        </div>
      `;

            teamGrid.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));

//Nav mobil
const navigation = document.querySelector('.menu');
const menuBut = document.querySelector('#menu');
const firstPag = document.querySelector('.first-part');

menuBut.addEventListener('click', () => {
    navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
    firstPag.style.marginTop = firstPag.style.marginTop === '150px' ? '0' : '150px';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();