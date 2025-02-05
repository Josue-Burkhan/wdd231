document.getElementById("last-modified").textContent = document.lastModified;
function toggleContent(id) {
    const content = document.getElementById(id);
    if (content) {
        content.classList.toggle("active");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-CA');
    const formattedTime = now.toTimeString().split(' ')[0];

    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = `${formattedDate} | ${formattedTime}`;
    }


    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});