document.getElementById("text-input").addEventListener("input", async (e) => {
  const text = e.target.value;


  if (!text.trim()) {
    document.getElementById("translated-es").innerText = "";
    document.getElementById("translated-en").innerText = "";
    document.getElementById("translated-ja").innerText = "";
    return;
  }

  try {
    const response = await fetch("/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await response.json();
    if (data.translations) {
      document.getElementById("translated-es").innerText = data.translations.es;
      document.getElementById("translated-en").innerText = data.translations.en;
      document.getElementById("translated-ja").innerText = data.translations.ja;
    } else {
      document.getElementById("translated-es").innerText = "Translation failed.";
      document.getElementById("translated-en").innerText = "Translation failed.";
      document.getElementById("translated-ja").innerText = "Translation failed.";
    }
  } catch (error) {
    console.error("Error fetching translation:", error);
  }
});

//Nav mobil
const navigation = document.querySelector('.menu');
const menuBut = document.querySelector('#menu');
const firstPag = document.querySelector('#main');

menuBut.addEventListener('click', () => {
    navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
    firstPag.style.marginTop = firstPag.style.marginTop === '220px' ? '140px' : '220px';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();

