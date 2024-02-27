function increaseScore(thikir) {
    var scoreElement = document.getElementById(thikir + '-score');
    var score = parseInt(scoreElement.innerText);
    scoreElement.innerText = ++score;
}
 // 'e.target' would refer to the element that triggered the event, such as a button that was clicked.
// Example: If a button with the onclick attribute calling increaseScore(thikir) was clicked, e.target would be that button.

// 'this' in the context of an event listener attached to elements would refer to the element the listener is attached to.
// If used inside an event listener, 'this' would be the element to which the event listener is added, potentially different from e.target if the event bubbled up.
