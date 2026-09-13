// =========================
// VOTE BUTTON
// =========================

const voteButton = document.querySelector(".vote-button");

voteButton.addEventListener("click", function () {

    alert("Voting system coming soon!");

});


// =========================
// RANKING CARD CLICK
// =========================

const rankingCards = document.querySelectorAll(".ranking-card");

rankingCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const person = card.querySelector("h3").textContent;

        alert("You selected " + person);

    });

});
