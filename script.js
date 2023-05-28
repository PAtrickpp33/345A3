const modal = document.getElementById("myModal");
const givenNameInput = document.getElementById("givenNameInput");

function openModal() {
    modal.style.display = "block";
    givenNameInput.focus();
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};