document.getElementById("close_letter").addEventListener('click', function() {
    const img = document.getElementById("close_letter");
    if (img.src.includes("images/close_letter.png")) {
        img.src = "images/open_letter.png";
    } else {
        img.src = "images/close_letter.png";
    }
});
