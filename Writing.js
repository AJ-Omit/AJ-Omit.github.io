document.addEventListener("DOMContentLoaded", function() {
    const books = document.querySelectorAll(".book");
    const passageDisplay = document.getElementById("passage-display");

    const passages = {
        passage1: "This is the first passage from Book 1.",
        passage2: "Here is a short excerpt from Book 2.",
        passage3: "An interesting snippet from Book 3 is here.",
        passage4: "Finally, a memorable quote from Book 4."
    };

    books.forEach(book => {
        book.addEventListener("click", function() {
            const passageKey = this.getAttribute("data-passage");
            const passageText = passages[passageKey];
            passageDisplay.innerHTML = `<p>${passageText}</p>`;
        });
    });
});