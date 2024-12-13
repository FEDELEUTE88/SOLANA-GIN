// Funzione per versare il gin nel bicchiere
function pourGin() {
    alert("Gin versato! Prenditi una pausa e goditi il tuo Solana Gin!");
}

// Carica l'immagine dell'utente sulla bottiglia
document.getElementById('upload-image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('bottle').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
