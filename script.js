// script.js
// Shows a 10 second countdown, then reveals a button linking to abc.com.
// The big red "1234" remains visible at all times.

(function () {
  const START_SECONDS = 10;
  let remaining = START_SECONDS;

  const countdownEl = document.getElementById('countdown');
  const buttonEl = document.getElementById('targetButton');

  // Initialize UI
  countdownEl.textContent = `Starting in ${remaining}`;
  buttonEl.classList.add('hidden');

  // Update function runs every 1 second
  const timer = setInterval(() => {
    remaining -= 1;

    if (remaining > 0) {
      countdownEl.textContent = `Starting in ${remaining}`;
    } else {
      clearInterval(timer);
      // Hide countdown text and reveal button
      countdownEl.textContent = 'Ready';
      countdownEl.classList.add('hidden');
      buttonEl.classList.remove('hidden');

      // Optionally focus the button for keyboard users
      buttonEl.focus();
    }
  }, 1000);

  // Accessibility: if JavaScript is disabled, show a fallback message
  // (This block runs only when JS is enabled; include a noscript in HTML if you want a fallback.)
})();
